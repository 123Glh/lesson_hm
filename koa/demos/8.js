const Koa = require('koa');
const app = new Koa();

// 数组
const handler = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500
    ctx.response.type = 'type'  // 响应头
    // ctx.response.body = {
    //   message: err.message
    // }
    ctx.response.body = `<h1>${err.message}</h1>`
    ctx.app.emit('error', err, ctx)  // vue 子 向 父 传值
  }
  // console.log('1'); // 这个是不会执行的
}
app.on('error', (err, ctx) => {
  console.log('logging error', err.message);

  console.log('error', err);
})
const main = async (ctx, next) => {
  ctx.throw(500) // 抛出错误
  // await next()
}


app.use(handler) // 挂载 有人兜底 当前面的报错了 就会执行这个 错误处理中间件
app.use(main)
// app.use(handler) // 挂载 有人兜底 当前面的报错了 就会执行这个 错误处理中间件

app.listen(3000)