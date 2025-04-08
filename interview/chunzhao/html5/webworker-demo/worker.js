// 独立的线程
// 不可共享线程的上下文
// 不可以访问 dom
self.onmessage = function (e) {
  console.log(e.data);
  // ...
  self.postMessage('worker received message');
}