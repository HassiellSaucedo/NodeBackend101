const fs = require('fs')

fs.copyFile("os-files/Naranja.txt", 'os-files/limon.txt', err => {
    if (err) {
        console.log(err)
    }

    console.log('Narnaja fue copiado como limon')
})