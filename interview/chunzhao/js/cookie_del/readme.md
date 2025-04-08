# 如何删除 cookis

- cookie 本地存储 请求传输 放在请求头 4k 左右
- Domain 域名
  document.cookie = "token=123;domain=baidu.com"
- path 路径
  document.cookie = "token=123;domain=baidu,com;path=/a/b/c"
- Expires/Max-Age
  document.cookie = "token=123;domain=baidu.com;path=/a/b/c;expires=2023-12-31"
  document.cookie = "token=123;domain=baidu.com;path=/a/b/c;max-age=1000"
- Secure 只在 https 下传输
- HttpOnly 禁止 js 读取 XSS
- SameSite 限制第三方cookie
  - Strict 完全不允许第三方cookie
  - Lax 不允许第三方cookie，但是GET请求
  - None 允许第三方cookie