const path = require('path')
const { outDir } = require('./paths')

const buildConfig = {
  // 针对module 需要的打包
  esm: {
    module: 'ESNEXT',
    format: 'esm',
    output: {
      // 打包输出到dist的目录
      name: 'es',
      path: path.resolve(outDir, 'es')
    },
    bundle: {
      path: `vu-design/es`
    }
  },

  // 针对commonjs 需要的打包
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    output: {
      name: 'lib',
      path: path.resolve(outDir, 'lib')
    },
    bundle: {
      path: 'vu-design/lib'
    }
  }
}

module.exports = {
  buildConfig
}
