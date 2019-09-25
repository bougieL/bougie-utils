const chalk = require('chalk')
const execSync = require('child_process').execSync

const exec = (cmd) => {
  const stdout = execSync(cmd, {
    stdio: 'inherit'
  })
  if (stdout) {
    Log.info(chalk.green.bold(stdout.toString()))
  }
}

class Log {
  static info(m) {
    console.log(
      chalk.default.gray(`[${now()}]`) + '  🚙    ' + chalk.default.blue(m)
    )
  }
  static warnning(m) {
    console.log(
      chalk.default.gray(`[${now()}]`) + '  🚕    ' + chalk.default.yellow(m)
    )
  }
  static error(m) {
    console.log(
      chalk.default.gray(`[${now()}]`) + '  🚗    ' + chalk.default.red(m)
    )
  }
  static success(m) {
    console.log(
      chalk.default.gray(`[${now()}]`) + '  🚖    ' + chalk.default.green(m)
    )
  }
}

module.exports = {
  exec,
  Log
}

// ------------ unexported ------------

function now() {
  return new Date().toLocaleTimeString()
}
