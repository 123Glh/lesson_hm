// 被共享
import mitt from 'mitt' // 基于 eventBus 实现通信
// 发布者
// 和 emitter 生成订阅关系
const emitter = mitt()  // 创建一个 mitt 实例 单例
export default emitter
// mitt 是一个基于 eventBus 实现通信的库，它的使用方法如下：
// 1. 安装 mitt
// npm install mitt
// 2. 引入 mitt
// import mitt from 'mitt'
// 3. 创建一个 eventBus
// const emitter = mitt()
// 4. 监听事件
// emitter.on('eventName', (data) => {
//   console.log(data)
// })
// 5. 触发事件
// emitter.emit('eventName', 'data')
// 6. 取消监听事件
// emitter.off('eventName')
