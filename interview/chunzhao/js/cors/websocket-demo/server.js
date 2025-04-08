const WebSocket = require('ws');
const http = require('http');
// const { log } = require('console');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-type': 'text/plain'
  })
  res.end('WebSocket Server')
})
// web + socket
const wss = new WebSocket.Server({
  server,
  path: '/ws'
})
wss.on('connection', ws => {
  console.log('WebSocket connected');
  wss.on('message', msg => {
    console.log(`Received message: ${msg}`);
    ws.send(`Received message: ${msg}`);
  })
  ws.send('Welcome to WebSocket Server');
})
server.listen(8080, () => {
  console.log('WebSocket Server is listening on port 8080');
})
// 1. 创建服务器 http
// 2. 创建WebSocket 服务器
// 3. 建立一次 http 连接