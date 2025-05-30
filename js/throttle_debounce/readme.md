- 认识几个url
  url的设计模式 restful  api
  网站是用来暴露资源的  如何将资源暴露出去
  - http://localhost:3001/posts/   列表页的链接
  - http://localhost:3001/posts/:id  id 查询参数 详情页的链接
  - http://localhost:3001/users/:id    用户页的链接

- 数据的查询  Read
- 访问资源的方式
  - apiFox 是啥？ web 请求代理
    Get http://localhost:3001/posts/1    获取资源
    Patch http://localhost:3001/post/1   部分更新资源    patch(补丁)

  - 资源   db.json users posts
  - HTTP 协议
    - Method (动作 GET|PATCH 修改|POST 新增) + URL (资源)  请求行
    - 请求头 Cookie  Content-Type: application/json ...
    - 请求体
  - json-server 
    - http 服务
    - db.json 数据资源向外提供访问 CRUD

- 会设计restfun api 接口
  - 需求
    - 新增一篇文章
      http://localhost:3001/posts  POST

      json 数据

      {
        ...
      }

    - 删除 文章2
      http://localhost:3001/posts/2 DELETE

- json-server 是一个支持restful api 设计的数据服务器

- 全栈防抖
  - 前后端 分离   解耦
    - 前端 live-server 5500
      fetch url 
    - 后端 json-server 3001
      url  接口服务  restful
    - api 接口

- filter,map
  - 都是Array.prototype上的方法,所有的数组方法都可以使用
  - filter 数组过滤，回调函数返回值是否为true
  - map 数组映射，回调函数返回值作为新的数组元素 原有的数组不能满足需求
  - forEach   迭代每一项  不需要返回值

- 防抖
  - 将要执行的函数交给一个debounce()高阶函数去优化
  - 减少执行次数 只执行连续输入最后一次
  - 定时器 本次关掉上一次的计时器