//common js
// node 最简单的后端框架
const koa = require('koa');
const app = new koa();  // 也是应用
const Router = require('koa-router');  // 路由
const router = new Router(); // 实例化路由
const axios = require('axios');
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
  const message = "hello"
  const data = {
    model: "deepseek-r1:7b", // 必须制定
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