import {
  mutableHandler, // 普通对象
  shallowReactiveHandler // 浅的代理对象处理函数
} from './baseHandlers.js'
// 依赖地图  Map es6 新增的数据结构 HashMap O(1) key 取 value 
// get set has ....  json 区别 key 只能是字符串， map 可以是对象
// 这里使用了 单例模式  全局都使用这个对象
export const reactiveMap = new WeakMap(); // 全局依赖
export const shallowReactiveMap = new WeakMap();  // 浅的依赖
// 垃圾回收 弱引用
// 大型项目 响应式对象很多，但是 reactiveMap 只有一个 性能？
// router-view 
// target 普通对象
export const reactive = (target) => {
  // 返回代理对象
  return createReactiveObject(target, reactiveMap, mutableHandler);
}

// 浅的
export const shallowReactive = (target) => {
  return createReactiveObject(target, shallowReactiveMap, shallowReactiveHandler);
}

// 代理对象的处理
function createReactiveObject(target, proxyMap, proxyHandlers) {
  if (typeof target !== 'object') {
    console.warn('reactive 必须是一个对象');
    return target;
  }
  // 代理对象
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy; // 已经存在， 直接返回
  }
  // console.log('创建代理对象');
  const proxy = new Proxy(target, proxyHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}