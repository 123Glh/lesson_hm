const Koa = require('koa');
const app = new Koa();


// 中间件 洋葱模型 顺序执行
const one = (ctx, next) => {
  // ctx.response.body = 'Hello World';
  console.log('>> one');
  next();
  console.log('<< one');
}
const tow = (ctx, next) => {
  console.log('>> tow');
  next();
  console.log('<< tow');
}
const three = (ctx, next) => {
  console.log('>> three');
  next();
  console.log('<< three');
}
const main = (ctx, next) => {
  ctx.response.body = 'Hello World';
  next();
}

app.use(main)
app.use(one)
app.use(tow)
app.use(three)

app.listen(3000)