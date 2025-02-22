// server.js
const Koa = require('koa');
const Router = require('koa-router');
const axios = require('axios');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

// 跨域中间件
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type');

  if (ctx.method === 'OPTIONS') {
    ctx.status = 204;
    return;
  }
  await next();
});

app.use(bodyParser());

// 聊天接口
router.post('/chatai', async (ctx) => {
  try {
    const { message } = ctx.request.body;

    if (!message || message.trim() === '') {
      ctx.status = 400;
      ctx.body = { code: 400, error: '消息不能为空' };
      return;
    }

    const response = await axios.post('http://localhost:11434/api/chat', {
      model: "deepseek-r1:1.5b",
      messages: [{ role: "user", content: message }],
      stream: false
    });

    ctx.body = {
      code: 200,
      content: response.data.message.content
    };
  } catch (error) {
    console.error('API Error:', error);
    ctx.status = 500;
    ctx.body = {
      code: 500,
      error: '服务暂时不可用，请稍后重试',
      detail: error.message
    };
  }
});

// 根路由
router.get('/', (ctx) => {
  ctx.body = { status: 'Chat API Running' };
});

app.use(router.routes());
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});