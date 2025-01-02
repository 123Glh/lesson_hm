- es6 promise
  Promise 类，专门解决异步耗时性问题，执行流程可控，
  其他大型语言一般是同步的,js 通过es6 promise 解决了 单线程 , 异步不好控制的问题
  promise 让异步变同步 提供了完善解决异步任务的机制
   - 口袋  装耗时性的内容 executor 立即执行
     - resolve,reject 两个函数参数
     - resolve 成功解决Promise,.then执行
     - reject 失败了  catch 执行
   - then 方法  等它完成后
     resove(data) 后 执行回调函数,data 传给回调函数
   - catch 方法
     reject(error) 后执行回调函数,error 传给回调函数
  
  - promise 三种状态
    - pending 等待状态      实例化后, reject/resolve 之前
    - fulfilled 成功状态    resolve()之后,  得从 pending 状态到 fulfilled 状态
    - rejected 失败状态     reject()之后,   得从 pending 状态到 rejected 状态

    promise 诺言  开弓没有回头箭,不能回头  状态只会从 pending 到 fulfilled 或者从 pending 到 rejected,状态一旦确定就不会再变了