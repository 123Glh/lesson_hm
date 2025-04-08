请 介绍 下 302，304 状态码

304 Not Modified: 跟面试官聊聊 协商缓存

301 永久重定向 一律(get)
302 临时跳转   post -> get
307 临时重定向  保持请求方法
308 永久重定向  保持请求方法

## 分类
- 1xx 信息状态码
  101 切换协议 switch-protocol http -> websocket
- 2xx 成功状态码
  200 OK
  201 Created 资源创建成功
  204 No Content 无内容返回 服务器处理成功 但是没有返回任何内容 通常用于删除操作
- 3xx 重定向状态码
  301 moved permanently 永久重定向
  302 found 临时重定向
  304 not modified 协商缓存 客户端缓存
  307 temporary redirect 临时重定向 保持请求方法
  308 permanent redirect 永久重定向 保持请求方法
- 4xx 客户端错误状态码
  400 bad request 客户端请求错误
  401 unauthorized 未授权
  403 forbidden 禁止访问
  404 not found 资源不存在
  405 method not allowed 方法不允许
- 5XX 服务器错误状态码
  500 internal server error 服务器内部错误
  501 not implemented 未实现
  502 bad gateway 网关错误