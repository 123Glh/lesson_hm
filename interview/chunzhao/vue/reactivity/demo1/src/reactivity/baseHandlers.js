import {
  track,
  trigger
} from './effect';
import { reactive } from './reactive';
import { isObject } from '../shard';

// 代理对象的拦截操作
// get obj key effect -> track 依赖地图中
const get = createGetter();
const set = createSetter();
const shallowReactiveGet = createGetter(true);

function has(target, key) {
  const res = Reflect.has(target, key) // 底层的方法
  track(target, 'has', key)
  return res
}
// 浅的
function createGetter(shallow = false) {
  // 提升代码的可读性 这两个 get 不会冲突
  return function get(target, key) { // reactive 是啥？ 代理对象
    // console.log(target, key, reactive, '-----------------');
    // 收集依赖
    track(target, "get", key);
    let res = target[key];
    if (isObject(res)) {
      // return reactive(res);
      return shallow ? res : reactive(res);
    }
    return res;
  }
}
function createSetter() {
  return function set(target, key, value, receiver) {
    // console.log('------------------');
    // target[key] = value;
    const res = Reflect.set(target, key, value, receiver);
    trigger(target, "set", key);
    return true;
  }
}
export const mutableHandler = {
  // 拦截哪些行为
  get,
  set,
  // has,
}

export const shallowReactiveHandler = {
  get: shallowReactiveGet,
  set,
}