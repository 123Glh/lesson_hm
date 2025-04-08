const Koa = require('koa');
const websocket = require('koa-websocket');
// 基于http协议 构建 webscoket 服务
const app = websocket(new Koa());
// es6 提供的新的数据结构
// 数组，绝对不会重复
const clients = new Set()
app.use(async ctx => {
  ctx.body = `
  <html>
    <body>
      <div id="messages" style="height: 300px; overflow-y: scroll;"></div>
      <input type="text" id="messageInput" />
      <button onclick="sendMessage()">发送</button>
      <script>
      // html5 新特性 利用 websocket 协议可以和服务器建立连接
      const ws = new WebSocket('ws://localhost:3000');
      ws.onmessage = function (event) {
        // console.log(event);
        const messages = document.getElementById('messages');
        messages.innerHTML += "<div>" + event.data + "<br/>";
      }
      function sendMessage() {
       const msg = document.getElementById('messageInput').value.trim();
       console.log(msg);
       ws.send(msg);
      }
      </script>
    </body>
  </html>
  `
})
// 处理 socket 连接
// ws websocket 简写
app.ws.use(async (ctx, next) => {
  this.clients.add(ctx.websocket);
  console.log('-----------------');
  // 事件监听
  ctx.websocket.on('message', message => {
    // console.log(message, '||||', ctx.websocket);
    for (const client of clients) {
      client.send(message.toString()); // 服务器广播给所有的客户端
    }
  })
  ctx.websocket.on('close', () => {
    console.log('---------------------', ctx.websocket.toString());
    clients.delete(ctx.websocket);
  })
})
// http 伺服
app.listen(3000, () => {
  console.log(`server is running on http://localhost:3000`);
});