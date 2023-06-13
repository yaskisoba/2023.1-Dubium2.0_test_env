require('dotenv').config()

//configs server
const http = require('./server.js')

//socket
require("./config/sockets.js")


const port = process.env.PORT

const server = http.listen(port, () => {
    console.log(`O servidor está rodando em: http://localhost:${port}`)
})

module.exports = server;
