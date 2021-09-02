const { Transform } = require('stream')

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        str = chunk.toString()
        arr = str.split(" ")
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)

        }
        str2 = arr.join("")
        this.push(str2)
        callback()
    }
})

process.stdin.pipe(transformStream).pipe(process.stdout)