const gulpSass = require('gulp-sass')
const dartSass = require('sass')
const { series, src, dest } = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const path = require('path')
const through2 = require('through2')
const File = require('vinyl')
const { run, withTaskName } = require('../../build/utils')

/**
 * @author lihh
 * @description 处理css文件
 */
const compile = () => {
  const sass = gulpSass(dartSass)

  // 替换内容函数
  const replaceFn = () => (id) => {
    id = id.replace(/fonts\/iconfont/g, `vu-design-plus/theme-chalk/fonts/iconfont`)
    return id
  }
  return src(path.resolve(__dirname, './src/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({}))
    .pipe(
      through2.obj(function (globFile, encoding, callback) {
        const file = new File(globFile)
        const params = {
          base: file.base.replace(/\/src/, ''),
          path: file.path.replace(/\/src/, '')
        }
        const { contents: contentBuffer } = file
        const replaceContentHandle = replaceFn()
        const newContent = Buffer.isBuffer(contentBuffer)
          ? replaceContentHandle(contentBuffer.toString())
          : contentBuffer
        const res = new File({
          ...file,
          contents: Buffer.from(newContent),
          ...params
        })
        this.push(res)
        callback()
      })
    )
    .pipe(dest('./dist/css'))
}

/**
 * @author lihh
 * @description 进行字体copy
 */
const copyFont = () => {
  return src(path.resolve(__dirname, './src/fonts/**')).pipe(
    dest('./dist/fonts')
  )
}

/**
 * @author lihh
 * @description 进行样式copy
 */
const copyStyle = () => {
  return src(path.resolve(__dirname, 'dist/**'))
    .pipe(dest(path.resolve(__dirname, '../../dist/theme-chalk')))
}

const buildStyle = series(compile, copyFont, copyStyle)

exports.default = series(
  withTaskName('remove: theme-chalk', () => run(`rm -rf ./dist`)),
  buildStyle
)
