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
    console.log(chalk.gray(`[${now()}]`) + '  🚙    ' + chalk.blue(m))
  }
  static warnning(m) {
    console.log(chalk.gray(`[${now()}]`) + '  🚕    ' + chalk.yellow(m))
  }
  static error(m) {
    console.log(chalk.gray(`[${now()}]`) + '  🚗    ' + chalk.red(m))
  }
  static success(m) {
    console.log(chalk.gray(`[${now()}]`) + '  🚖    ' + chalk.green(m))
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
