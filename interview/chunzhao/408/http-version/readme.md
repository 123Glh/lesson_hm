# http 版本

- 0.9
  GET 请求 不包含头信息
- 1.0
  POST等
  HTTP Head
  text/plain image/jpg text/css
  status code
- 1.1
  tcp/ip 每次都连接，断开？
  - keep-alive 允许在同一个TCP连接上发送多个HTTP请求和响应，减少了连接的建立和关闭开销。
  - 管道化（Pipelining）：允许客户端在同一个TCP连接上发送多个HTTP请求，而无需等待前一个请求的响应。减少了延迟。
    1. 请求一个 HTML 文档 GET index.html
    2. 请求 css 文件 GET style.css
    3. 请求 js 文件 GET script.js
    4. 请求图片 GET image.jpg

    由于共享一个 TCP 连接 对头阻塞。
    设计旨在减少建立连接的开销。
  http 并发数提升了
- 2.0
  多路复用
  允许在同一个链接上同时处理多个请求和响应。相互之间不受影响。

  服务器推送
  服务器可以主动向客户端发送资源，而无需客户端明确请求。

  二进制分帧
  分割成更小的帧(二进制)，提高传输效率和安全性，支持多路复用。
- 3.0

性能优化：包括升级 HTTP 协议