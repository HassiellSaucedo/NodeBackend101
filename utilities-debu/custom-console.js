const fs = require('fs')
const output = fs.createWriteStream('utilities-debu/stdout.log')
const error = fs.createWriteStream('utilities-debu/stderr.log')

const date = new Date()
const customConsole = new console.Console(output, error)

customConsole.logger = (element) => {
    customConsole.log(`Logger created on ${date} : ${element}`)
    console.log("\x1b[34m%s\x1b[0m", `💬  This part is log : ${element}`)
}
customConsole.warning = (element = '') => {
    customConsole.log(`Warning created on ${date} : ${element}`)
    console.log("\x1b[33m%s\x1b[0m", `❕  This part is warning : ${element}`)
}
customConsole.danger = (element = '') => {
    customConsole.log(`Danger created on ${date} : ${element}`)
    console.log("\x1b[31m%s\x1b[0m", `❗  This part is danger : ${element}`)
}
customConsole.err = (error = '') => {
    customConsole.error('An error occurred')
    console.log("\x1b[32m%s\x1b[0m", `❌  An error occurred : ${error}`)
}

customConsole.logger('Hello')
customConsole.warning()
customConsole.danger()
customConsole.err()