- 路由由几种类型
  - hash
  - history
- 为何前端路由
  - 用户体验 快
    传统的 (后端路由，前端没有路由) 慢 白屏 (不可忍受，特别是移动端，客户体验类比 (client))
    前端路由(页面级别组件 也在本地 快速切换)
  - 单页引用 SPA
    一堆扑克 切换 头尾不动 中间的router-view部分切换
  - 两种路由的优劣
    hash #/hello 兼容性 # url 的一部分
    http://localhost:3000/user/:id?a=1&b=2#/hello 
    锚链接 锚定页面的某个位置
    hash 切换的时候会触发 hashchange 事件 router 配置
    hash => component 替换 router-view
    url 部分改变了，不会重新加载页面 hash 天然具备

    http://127.0.0.1:5502/interview/chunzhao/js/source_code/router/1.html#first
    ->
    http://127.0.0.1:5502/interview/chunzhao/js/source_code/router/1.html#forth
    hash 改变了

    缺点： 不美观 不像后端路由

- historyRouter 和后端路由看上去差不多