# 场景题
有一个页面，有8个元素，做了flex布局，计算性能指标的渲染总时间和第一个元素的渲染完时间。

- 页面显示流程
  DOM + CSSOM = RenderTree + Layout + 图层(z-index transform 重绘)
  script 尾部执行
  事件监听(?)
  event
  js 主线程 -> 微任务渲染 -> 计算时间

- 用setTimeout模拟setInterval会有什么问题？
- promise 实现并发控制
- 红绿灯
- 手写 promise.allSettled
- 手写 Promise
- http2.0 多路复用 是不是越多越好？ 会有上限吗？
- cursor 和 windurf 用的多吗？ 占比多少？ trea 用过吗？