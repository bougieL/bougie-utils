const { resolve, join } = require('path')

const root = resolve(__dirname, '..')

module.exports = {
  src: join(root, 'src'),
  lib: join(root, 'lib'),
  packageJson: join(root, 'package.json'),
  binTSC: join(root, 'node_modules', '.bin', 'tsc'),
  tsconfig: join(root, 'tsconfig.json')
}