const { series, parallel } = require('gulp')
const { sync } = require('fast-glob')
const { compRoot, outDir, projectRoot } = require('./utils/paths')
const path = require('path')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const vue = require('rollup-plugin-vue')
const typescript = require('rollup-plugin-typescript2')
const { rollup } = require('rollup')
const { buildConfig } = require('./utils/config')
const { pathRewriter, run } = require('./utils')
const { Project } = require('ts-morph')
const glob = require('fast-glob')
const fs = require('fs/promises')
const VueCompiler = require('@vue/compiler-sfc')

/**
 * @author lihh
 * @description 用来编译每个模块
 * @returns {Promise<Awaited<unknown>[]>}
 */
const buildEachComponent = async () => {
  // 打包每个组件
  const files = sync('*', {
    cwd: compRoot,
    onlyDirectories: true
  })
  // 分别把components 文件夹下的组件 放到dist/es/components下 和 dist/lib/compmonents
  const builds = files.map(async (file) => {
    const input = path.resolve(compRoot, file, 'index.ts') // 每个组件的入口
    const config = {
      input,
      plugins: [nodeResolve(), vue(), typescript(), commonjs()],
      external: (id) => /^vue/.test(id) || /^@vu-design/.test(id)
    }
    const bundle = await rollup(config)
    const options = Object.values(buildConfig).map((config) => ({
      format: config.format,
      file: path.resolve(config.output.path, `components/${file}/index.js`),
      paths: pathRewriter(config.output.name)
    }))

    await Promise.all(options.map((option) => bundle.write(option)))
  })
  return Promise.all(builds)
}

/**
 * @author lihh
 * @description 获取每个文件的类型
 * @returns {Promise<void>}
 */
async function genTypes() {
  const project = new Project({
    // 生成.d.ts 我们需要有一个tsconfig
    compilerOptions: {
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      noEmitOnError: true,
      outDir: path.resolve(outDir, 'types'),
      baseUrl: projectRoot,
      paths: {
        '@vu-design/*': ['packages/*']
      },
      skipLibCheck: true,
      strict: false
    },
    tsConfigFilePath: path.resolve(projectRoot, 'tsconfig.json'),
    skipAddingFilesFromTsConfig: true
  })

  const filePaths = await glob('**/*', {
    // ** 任意目录  * 任意文件
    cwd: compRoot,
    onlyFiles: true,
    absolute: true
  })

  const sourceFiles = []

  await Promise.all(
    filePaths.map(async function (file) {
      if (file.endsWith('.vue')) {
        const content = await fs.readFile(file, 'utf8')
        const sfc = VueCompiler.parse(content)
        const { script } = sfc.descriptor
        if (script) {
          let content = script.content // 拿到脚本  icon.vue.ts  => icon.vue.d.ts
          const sourceFile = project.createSourceFile(file + '.ts', content)
          sourceFiles.push(sourceFile)
        }
      } else {
        const sourceFile = project.addSourceFileAtPath(file) // 把所有的ts文件都放在一起 发射成.d.ts文件
        sourceFiles.push(sourceFile)
      }
    })
  )
  await project.emit({
    // 默认是放到内存中的
    emitOnlyDtsFiles: true
  })

  const tasks = sourceFiles.map(async (sourceFile) => {
    const emitOutput = sourceFile.getEmitOutput()
    const tasks = emitOutput.getOutputFiles().map(async (outputFile) => {
      const filepath = outputFile.getFilePath()
      await fs.mkdir(path.dirname(filepath), {
        recursive: true
      })
      // @vu-design -> vu-design/es -> .d.ts 肯定不用去lib下查找
      await fs.writeFile(filepath, pathRewriter('es')(outputFile.getText()))
    })
    await Promise.all(tasks)
  })

  await Promise.all(tasks)
}

/**
 * @author lihh
 * @description 进行类型复制
 * @returns {*}
 */
function copyTypes() {
  const src = path.resolve(outDir, 'types/components/')
  const copy = (module) => {
    let output = path.resolve(outDir, module, 'components')
    return () => run(`cp -r ${src}/* ${output}`)
  }
  return parallel(copy('es'), copy('lib'))
}

/**
 * @author lihh
 * @description 编译组件入口
 * @returns {Promise<Awaited<RollupOutput>[]>}
 */
async function buildComponentEntry() {
  const config = {
    input: path.resolve(compRoot, 'index.ts'),
    plugins: [typescript()],
    external: () => true
  }
  const bundle = await rollup(config)
  return Promise.all(
    Object.values(buildConfig)
      .map((config) => ({
        format: config.format,
        file: path.resolve(config.output.path, 'components/index.js')
      }))
      .map((config) => bundle.write(config))
  )
}

const buildComponent = series(
  buildEachComponent,
  genTypes,
  copyTypes(),
  buildComponentEntry
)

module.exports = {
  buildComponent
}
exports.buildComponent = buildComponent
