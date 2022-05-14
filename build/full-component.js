const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const vue = require('rollup-plugin-vue')
const typescript = require('rollup-plugin-typescript2')
const path = require('path')
const { outDir, vuRoot } = require('./utils/paths')
const { rollup } = require('rollup')
const fs = require('fs/promises')
const buildConfig = require('./utils/config')
const { pathRewriter } = require('./utils')

/**
 * @author lihh
 * @description 编译所有的文件
 * @returns {Promise<Awaited<RollupOutput>[]>}
 */
const buildFull = async () => {
  // rollup打包的配置信息
  const config = {
    input: path.resolve(vuRoot, 'index.ts'),
    plugins: [nodeResolve(), typescript(), vue(), commonjs()],
    external: (id) => /^vue/.test(id)
  }

  // 表示打包的两种打包方式
  const buildConfig = [
    {
      format: 'umd',
      file: path.resolve(outDir, 'index.js'),
      name: 'VuDesignPlus',
      exports: 'named',
      globals: {
        vue: 'Vue'
      }
    },
    {
      format: 'esm',
      file: path.resolve(outDir, 'index.esm.js')
    }
  ]
  const bundle = await rollup(config)
  return Promise.all(buildConfig.map((config) => bundle.write(config)))
}

/**
 * @author lihh
 * @description 编译所有的入口文件
 * @returns {Promise<Promise<RollupOutput>[]>}
 */
const buildEntry = async () => {
  const entryFiles = await fs.readdir(vuRoot, { withFileTypes: true })
  const entryPoints = entryFiles
    .filter((f) => f.isFile())
    .filter((f) => !['package.json'].includes(f.name))
    .map((f) => path.resolve(vuRoot, f.name))

  const config = {
    input: entryPoints,
    plugins: [nodeResolve(), vue(), typescript()],
    external: (id) => /^vue/.test(id) || /^@vu-design-plus/.test(id)
  }

  const bundle = await rollup(config)
  return (
    await Promise.all(
      Object.values(buildConfig.buildConfig).map((config) => ({
        format: config.format,
        dir: config.output.path,
        paths: pathRewriter(config.output.name)
      }))
    )
  ).map((options) => bundle.write(options))
}

const buildFullComponent = async () => {
  await buildFull()
  await buildEntry()
}

module.exports = {
  buildFullComponent
}
