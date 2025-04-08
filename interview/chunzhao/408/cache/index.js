const http = require('http');
const url = require('url');
const path = require('path');
const crypto = require('crypto'); // 加密模块

http.createServer((req, res) => {
  let { pathname } = url.parse(req.url, true);
  // console.log(pathname);
  // res.end(pathname);
  if (pathname === '/') {
    // 管道
    // __dirname 项目根目录的物理路径
    // 项目可能要移动，部署到服务器上，__dirname 就会改变
    fs
      .createReadStream(path.join(__dirname, 'index.html'))
      .pipe(res);// 管道
    return;
  }

  let abs = path.join(__dirname, pathname);
  // console.log(abs);
  // 文件状态信息
  // 强缓存
  // res.setHeader('Expires', new Date(Date.now() + 20000).toGMTString()) // 用户端时间可能会不同步
  // res.setHeader('Cache-Control', 'max-age=20') // 缓存时间
  // 协商缓存
  fs.stat(abs, (err, stats) => {
    console.log(stats.ctime.toGMTString());
    res.setHeader('Last-Modified', stats.ctime.toGMTString())
    if (err) {
      res.statusCode = 404;
      res.end('Not Found');
      return;

    }
    if (req.headers['if-modified-since'] === res.headers['last-modified']) {
      res.statusCode = 304;
      res.end();
      return;
    }
    if (stats.isFile()) {
      // 普通文件
      // res.setHeader('Content-Type', 'text/html;charset=utf-8');
      fs.createReadStream(abs).pipe(res);
      return;
    }
  })
})
  .listen(8080);