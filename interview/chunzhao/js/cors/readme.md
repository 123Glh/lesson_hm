- 同源策略
  - jsonp 有啥缺点？
    - 不安全
    <script src=''></script>
    <script>
      fetch('')
    </script> XSS (注入恶意脚本)  攻击
    callback(data)
    - GET 方法， 不能post
      script src 不能发送 post 等其他请求
    - 会阻塞页面渲染，影响性能
    - 不太好处理http错误，回调只能在成功时候调用
    现代应用推荐使用 CORS 代替 JSONP
  - CORS 跨域资源共享
    Access-Control-Allow-Origin: *
      服务器设置允许跨域的域名
      跨域白名单
      - 允许跨域的域名数组
      - req.headers.origin
      - indexOf(req.headers.origin) 判断是否在白名单中
      - 服务器设置响应头 Access-Control-Allow-Origin: origin || *
    Access-Control-Allow-Methods: 
      允许请求的方法
    Access-Control-Allow-Headers: 
      允许的请求头
    Access-Control-Allow-Credentials: true
      允许携带 cookie
    Access-Control-Max-Age: 3600
      预检请求的有效期
      缓存预检请求的结果，避免重复发送预检请求
  - 预检请求
    浏览器会先发送一个 OPTIONS 请求，询问服务器是否允许跨域请求
    服务器返回 200 状态码，浏览器才会发送实际的请求
    - 简单请求
      - GET POST HEAD(用于询问服务器资源的头部信息)
    - 复杂请求 询问服务器同不同意
      - PUT DELETE CONNECT TRACE PATCH ...
      - 发送两个请求到服务器
        - OPTIONS 用于针对服务器上特定资源的预检请求，询问服务器是否允许跨域请求

- websocket
  不受同源策略的限制
  消息机制
  101 switch protocols
- postMessage html5 新特性
  iframe 标签
  一个网页(A)，嵌入(iframe)支付宝(B)
  不跨域

- vite proxy 反向代理