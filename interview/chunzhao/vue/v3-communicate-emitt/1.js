// emit 触发事件
// on 监听事件
// 面向对象 23种设计模式 订阅发布者模式
class EventEmitter {
  constructor() {
    this.cache = {}; // 发布者集合
  }
  on(name, fn) { // 订阅者订阅消息
    // 建立订阅关系的
    if (this.cache[name]) {
      this.cache[name].push(fn);
    } else {
      this.cache[name] = [fn];
    }
  }
  emit(name, ...args) { // 发布者发布消息
    // 触发订阅关系
    if (this.cache[name]) {
      // this.cache[name].forEach(fn => fn(...args));
      let tasks = this.cache[name].slice();
      for (let fn of tasks) {
        fn(...args);
      }
    }
  }
  off(name, fn) {
    let tasks = this.cache[name];
    if (tasks) {
      let index = tasks.findIndex(f => f === fn)
      if (index >= 0) {
        tasks.splice(index, 1);
      }
    }
  }
}
const fn1 = function (name, age) {
  console.log(name, age)
}
const fn2 = function (name, age) {
  console.log(name, age)
}
let eventBus = new EventEmitter();
eventBus.on('aaa', fn1)
eventBus.on('aaa', fn2) // 建立订阅关系
eventBus.off('aaa', fn1)
eventBus.emit('aaa', 'jack', 18)