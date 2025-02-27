const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const { log } = require('console');
const fsPromise = fs.promises;  // fs 模块的 promise 版本
const main = async ctx => {
  ctx.response.type = 'html';
  console.log(fsPromise.readFile('./index.html'));
  ctx.response.body = await fsPromise.readFile('./index.html');
}
app.use(main)
app.listen(3000)