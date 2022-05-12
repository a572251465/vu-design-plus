const path = require('path')

const projectRoot = path.resolve(__dirname, '../../')
const outDir = path.resolve(__dirname, '../../dist')
const packageRoot = path.resolve(projectRoot, './packages')
const vuRoot = path.resolve(packageRoot, 'vu-design-plus')
const compRoot = path.resolve(packageRoot, 'components')

module.exports = {
  projectRoot,
  outDir,
  packageRoot,
  vuRoot,
  compRoot
}
