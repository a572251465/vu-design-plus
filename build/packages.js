const { series, parallel, src, dest } = require('gulp')
const { buildConfig } = require('./utils/config')
const path = require('path')
const { outDir, projectRoot } = require('./utils/paths')
const ts = require('gulp-typescript')
const { withTaskName, pathRewriter, transformFlow } = require('./utils')
const through2 = require('through2')

/**
 * @author lihh
 * @description 将模块打包为esm, cjs模块
 * @param dirname 目录名称
 * @param name 名称
 */
exports.buildPackages = (dirname, name) => {
  const tasks = Object.entries(buildConfig).map(([module, config]) => {
    // 表示打包的出力路径
    const output = path.resolve(dirname, config.output.name)

    // 表示替换函数
    const replaceFn = (...args) => pathRewriter(...args)
    return series(
      withTaskName(`build:${dirname}`, () => {
        const tsConfig = path.resolve(projectRoot, 'tsconfig.json')
        const inputs = ['**/*.ts', '!gulpfile.ts', '!node_modules']
        return src(inputs)
          .pipe(
            ts.createProject(tsConfig, {
              declaration: true,
              strict: false,
              module: config.module
            })()
          )
          .pipe(through2.obj(transformFlow(replaceFn, config.output.name)))
          .pipe(dest(output))
      }),

      withTaskName(`copy: ${dirname}`, () => {
        return src(`${output}/**`).pipe(
          dest(path.resolve(outDir, config.output.name, name))
        )
      })
    )
  })

  return parallel(...tasks)
}
