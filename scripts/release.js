const fs = require('fs-extra')
const { exec, Log } = require('../config/_utils')
const paths = require('../config/_paths')

main()

const main = () => {
  Log.info('release started.')
  clean()
  compileTS()
  Log.success('release finished.')
}

function clean() {
  fs.removeSync(paths.lib)
  Log.success('clean cache success.')
}

function compileTS() {
  exec(`${paths.binTSC} -p tsconfig.json`)
  Log.success('compile ts success.')
}

function updateVersion() {}
