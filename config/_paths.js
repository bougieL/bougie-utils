const { resolve, join } = require('path')

const root = resolve(__dirname, '..')

module.exports = {
  src: join(root, 'src'),
  lib: join(root, 'lib'),
  libES: join(root, 'es'),
  packageJson: join(root, 'package.json'),
  binTSC: join(root, 'node_modules', '.bin', 'tsc'),
  tsconfig: join(root, 'tsconfig.json'),
  tsconfigES: join(root, 'tsconfig.es.json')
}
