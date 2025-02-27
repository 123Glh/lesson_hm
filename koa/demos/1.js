// js 两种模块化方案 commonjs 和 es6 module
// mvc
import Koa from 'koa';
// const Koa = require('koa');
const app = new Koa();
// const fs = require('fs'); // node 文件模块 内置
import fs from 'fs';
// 中间件
const main = ctx => {
  // index.html 返回给用户
  // fs 读取文件
  ctx.response.type = 'html'; // 响应体
  // 创建一个读取流？ 文件流 水龙头一样
  ctx.response.body = fs.createReadStream('./index.html');
  // ctx.body = 'Hello World';
  // ctx.response.body = 'Hello World';
}
// 中间件 req middleware res
app.use(main)

app.listen(3000);