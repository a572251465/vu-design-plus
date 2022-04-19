const { outDir, vuRoot, projectRoot } = require('./utils/paths')
const glob = require('fast-glob')
const { Project } = require('ts-morph')
const path = require('path')
const fs = require('fs/promises')
const { parallel, series } = require('gulp')
const { run, withTaskName } = require('./utils')
const { buildConfig } = require('./utils/config')

/**
 * @author lihh
 * @description 获取所有文件的类型
 * @returns {Promise<void>}
 */
const genEntryTypes = async () => {
  // 筛选所有后缀为ts的文件
  const files = await glob('*.ts', {
    cwd: vuRoot,
    absolute: true,
    onlyFiles: true
  })

  // 进行ts文件的提取 以及编译
  const project = new Project({
    compilerOptions: {
      declaration: true,
      module: 'ESNext',
      allowJs: true,
      emitDeclarationOnly: true,
      noEmitOnError: false,
      outDir: path.resolve(outDir, 'entry/types'),
      target: 'ESNext',
      rootDir: vuRoot,
      strict: false
    },
    skipFileDependencyResolution: true,
    tsConfigFilePath: path.resolve(projectRoot, 'tsconfig.json'),
    skipAddingFilesFromTsConfig: true
  })
  const sourceFiles = []
  files.map((f) => {
    const sourceFile = project.addSourceFileAtPath(f)
    sourceFiles.push(sourceFile)
  })
  await project.emit({
    emitOnlyDtsFiles: true
  })
  const tasks = sourceFiles.map(async (sourceFile) => {
    const emitOutput = sourceFile.getEmitOutput()
    for (const outputFile of emitOutput.getOutputFiles()) {
      const filepath = outputFile.getFilePath()
      await fs.mkdir(path.dirname(filepath), { recursive: true })
      await fs.writeFile(
        filepath,
        outputFile.getText().replace(/@vu-design/g, '.'),
        'utf8'
      )
    }
  })
  await Promise.all(tasks)
}

/**
 * @author lihh
 * @description 复制类型
 * @returns {*}
 */
const copyEntryTypes = () => {
  const src = path.resolve(outDir, 'entry/types')
  const copy = (module) =>
    parallel(
      withTaskName(`copyEntryTypes:${module}`, () =>
        run(
          `cp -r ${src}/* ${path.resolve(
            outDir,
            buildConfig[module].output.path
          )}/`
        )
      )
    )
  return parallel(copy('esm'), copy('cjs'))
}

const genTypes = series(genEntryTypes, copyEntryTypes())

module.exports = {
  genEntryTypes,
  copyEntryTypes,
  genTypes
}
