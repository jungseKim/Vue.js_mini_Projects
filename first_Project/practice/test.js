const http = require('http')

const server = http.createServer((req, res) => {
       res.end('heelo')
})
server.listen(5000);