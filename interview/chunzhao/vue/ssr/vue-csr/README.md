# CSR 和 SSR
- CSR SPA
  优点：
  - 用户体验好，不需要等待服务器返回数据，不会白屏
  所有 的路由和页面 (组件) 都是在客户端进行解析和渲染的 Client Side Rendering
  缺点：
  - 首屏加载慢
    懒加载 按需加载
    执行组件的编译和渲染
  - SEO 不友好
    搜索引擎无法抓取到页面的内容


- SSR 企业官网
  - 组件的编译和html字符串放到服务器端
  - SEO 更友好

- @vue/server-renderer  渲染
- @vue/compiler-ssr 编译