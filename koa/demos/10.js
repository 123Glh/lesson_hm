const Koa = require('koa');
const app = new Koa();
const { koaBody } = require('koa-body');

app.use(koaBody());
// get 没有请求体
const main = async (ctx) => {
  const body = ctx.request.body; // 请求体
  if (!body.name) {
    ctx.throw(400, '.name required');
  }
  ctx.body = {
    name: body.name
  };
}
app.use(main);

app.listen(3000);