const http = require('http');
const server = http.createServer((req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': '*', // 允许所有来源
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', // 允许的方法
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Custom-Header', // 允许的头信息
    'Access-Control-Max-Age': 86400, // 预检查缓存时间，单位秒，86400秒等于1天
  }
  if (req.method === 'OPTIONS') {
    // 预检查请求 200 OK  201 Created 204 No Content + 预检请求
    res.writeHead(204, headers)
    console.log('OPTIONS');
    res.end()
  }
  if (req.method === 'PUT' && req.url === '/data') {
    res.writeHead(201, headers);
    res.end('PUT 请求成功')
  } else {
    res.writeHead(404, headers);
    res.end('404 Not Found');
  }
})
server.listen(3000, () => {
  console.log('server is running at http://127.0.0.1:3000')
})