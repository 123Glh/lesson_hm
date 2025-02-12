const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();
// const main = ctx => {
//   if (ctx.request.path !== '/') { // 不是根目录
//     ctx.response.type = 'html';
//     ctx.response.body = '<a href="/">Index Page</a>'
//   } else {
//     ctx.response.type = 'text';
//     ctx.response.body = '<h1>Hello World</h1>';
//   }
// }
// app.use(main)
const main = ctx => {
  ctx.response.body = 'Hello World';
}
const about = ctx => {
  ctx.response.type = 'http';
  ctx.response.body = '<a href="/">Go back to the home page</a>';
}
app.use(route.get('/', main))
app.use(route.get('/about', about))
app.listen(3000);