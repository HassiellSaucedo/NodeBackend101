const os = require('os')

// console.table(   os.cpus())
console.log("IP Address", os.networkInterfaces())
console.log("Free memory", os.freemem())
console.log("Type", os.type())
console.log('OS_version', os.release())
console.log("Usr info", os.userInfo())