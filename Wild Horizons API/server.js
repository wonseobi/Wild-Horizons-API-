import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res) => {
    res.end('Message coming from the server')
})

server.listen(PORT, () => console.log('server running on: ${PORT}'))