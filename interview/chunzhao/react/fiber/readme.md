# react fiber 时间切片

- 定时器
- requsetAnimationFrame
- 文档碎片
- 重要？ js 本质是单线程
  用户体验
  DOM树、响应式业务 100ms 毫秒级别 页面卡顿

  组件越复杂(响应式更新)，层级越深，页面越卡顿

  - 组件的渲染或更新 怎么在一定事件后 停下来 让主线程有事件去处理其他任务 到时候再接着执行
    react 性能优化的 fiber 机制 时间切片

  - 用户交互和事件处理  优先级最高

  - requestAnimationFrame UI 更新
    callback + 递归调用 事件间隔 1/60s
  - requestIdleCallback 空闲时间执行
    - 用户交互，事件等优先
    - react 16 之后
    - 事件分片 复杂组件或大数据响应式业务(股票K线图) 更新
      react 组件渲染 生命周期 虚拟DOM diff 渲染 子组件 更新... 100ms
      暂停当前任务，让主线程有时间去处理其他任务，再接着执行
      一系列的 fiber 子 任务
    - 负责的任务更多，和 requestAnimationFrame 区别
    - 申请事件切片
      浏览器执行完主要任务(渲染，动画，时间...)
      - idle 后执行react fiber 任务
        timeRemaing 剩余时间到了后 归还执行权

- react fiber 机制？
  是 react 16 引入的新特性， 实现了可中断渲染。它将渲染工作分解为小单元(fiber节点),可暂停，恢复。
  通过requestIdelCallback 和 requestAnimationFrame ,Fiber 在浏览器空闲时执行低优先级更新，
  保障用户交互流畅，解决大型应用长任务(100ms,大量响应式数据，股市k线图，DOM 树层级太大)