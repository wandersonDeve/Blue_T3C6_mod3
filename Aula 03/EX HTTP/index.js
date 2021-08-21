const http = require('http')

http.createServer(function(req, res) {
    res.end('<h1>Olá Mundo</h1>')
}).listen(3000);


