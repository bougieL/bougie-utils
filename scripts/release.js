const fs = require('fs-extra')
const semver = require('semver')
const { exec, Log } = require('../config/_utils')
const paths = require('../config/_paths')
const packageJson = require(paths.packageJson)

const main = () => {
  Log.info('release started.')
  clean()
  compileTS()
  updateVersion()
  Log.success('release finished.')
}

main()

function clean() {
  fs.removeSync(paths.lib)
  Log.success('clean cache success.')
}

function compileTS() {
  exec(`${paths.binTSC} -p tsconfig.json`)
  Log.success('compile ts success.')
}

function updateVersion() {
  const newVersion = semver.inc(packageJson.version, 'minor')
  const packageJsonContent = fs.readFileSync(paths.packageJson, 'utf8')
  fs.writeFileSync(
    paths.packageJson,
    packageJsonContent.replace(/(?<=version.+)[\w\.]+/, newVersion)
  )
  Log.success('update version success.')
}
