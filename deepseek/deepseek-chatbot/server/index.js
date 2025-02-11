//common js
// node 最简单的后端框架
const koa = require('koa');
const app = new koa();  // 也是应用
const Router = require('koa-router');  // 路由
const router = new Router(); // 实例化路由
const axios = require('axios');
const bodyParser = require('koa-bodyparser');
// 添加跨域支持
// 上下文 ctx = req ...跨域，路由，错误处理... res
// 中间件 middleware
app.use(async (ctx, next) => {
  console.log('------跨域中间件');
  // 设置HTTP响应头 白名单
  ctx.set('Access-Control-Allow-Origin', '*');
  // 服务器端的安全 req 请求行 + 请求头 + 请求体
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type');
  if (ctx.method === 'OPTIONS') {
    // 响应头 http 状态码为 204 201 created ok
    ctx.status = 204;
    return;
  }
  await next();
})
// 启用了 bodyParser 中间件，它会解析请求体中的数据，并将其存储在 ctx.request.body 中。
app.use(bodyParser())
// app.use(async (ctx, next) => {
//   console.log('------ 解析参数中间件');
// })
// 新建 / 路由
router.get('/', async (ctx) => {
  // 响应体
  // ctx 这样一次请求的上下文
  ctx.body = `
   <html>
    <head>
      <title>chatbot</title>
    </head>
    <body>
      <h1>chatbot</h1>
    </body>
   </html>
  `;
})
// 新建一个路由 chatai
// method
// get post
// 后端 api 接口数据 json
// next.js
router.post("/chatai", async (ctx) => {
  // 前端 input 传过来的内容 message
  // 向 ollama 11434/api/chat 发送post 请求
  // message 请求体中解出来
  const message = ctx.request.body.message || '';
  const data = {
    model: "deepseek-r1:1.5b", // 必须制定
    messages: [
      {
        role: "user",
        content: message
      }
    ],
    stream: false
  }

  // axios 发送请求就用它 转发请求
  // AI 能力集成
  const response = await axios
    .post("http://localhost:11434/api/chat", data)
    .then((res) => {
      // console.log(res.data)
      // return res.data
      ctx.body = {
        code: 200,
        content: res.data.message.content
      }
    })
})
app.use(router.routes());  // 启动路由
app.listen(3000, () => {
  console.log(`server is running at port 3000`);
});