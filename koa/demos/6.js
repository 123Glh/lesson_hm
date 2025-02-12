const path = require('path'); // 内置模块
const Koa = require('koa');
const app = new Koa();
// 静态资源
const server = require('koa-static'); // koa 周边生态
// console.log(__dirname); // 当前文件所在的目录 绝对路径
// 路径对象 返回路径
const main = server(path.join(__dirname, 'static'));
app.use(main)

app.listen(3000)