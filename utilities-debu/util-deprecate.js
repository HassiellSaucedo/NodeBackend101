const util = require('util')

const helloPluto = util.deprecate(() => {
    console.log("Hola pluto")
}, "pluto is deprecated, it is not a planet anymore")

helloPluto()