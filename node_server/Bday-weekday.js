const http = require('http')
const moment = require('moment')
const server = http.createServer()

server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url == '/bday') {
        let body = []
        req.on('data', chunk => {
                body.push(chunk)
            })
            .on('end', () => {
                res.writeHead(200, { 'Content-Type': 'text/plain' })
                body = Buffer.concat(body).toString()
                let fecha = moment(body, 'DD/MM/YYYY')
                let dia = fecha.format('dddd')
                res.end(dia)


            })
    } else {
        res.statusCode = 404
        res.end()
    }
})

server.listen(8002)
console.log('Server running on http://localhost:8002')