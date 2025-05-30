# 事件循环 event loop
JavaScript 的事件循环（event loop）是一种机制，它负责执行异步代码并管理调用栈与任务队列之间的交互，确保异步操作如定时器、 promises 和 I/O 操作能够在适当的时候被执行。简而言之，事件循环使得 JavaScript 能够处理并发操作，而无需多线程。

- 事件
  - 宏任务
    setTimeOut setInterval 队列 FIFO
  - 微任务
    promise 队列 FIFO
- 循环
  同步任务 清空执行栈 -> 微任务队列(一次清空) -> 页面渲染 -> 宏任务队列(每次一个) -> 进入idle
  之后一直循环
- 机制
  同步任务线程 任务的执行顺序 (异步)

- script 本身就是一个宏任务
- 函数入栈
- async await 的本质是 promise语法糖 微任务 await 后面的代码是微任务
- 执行栈要先清空(同步)
- promise 的 executor 函数是同步的
- promise 的 then 方法是异步的
- 微任务队列 一次清空
- 页面渲染
- 宏任务队列 一次一个
- 进入idle
- 循环