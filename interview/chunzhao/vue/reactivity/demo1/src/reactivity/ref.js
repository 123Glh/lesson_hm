import { isObject } from "../shard";
import { track, trigger } from "./effect";
import { reactive } from "./reactive";
export function ref(val) {
  if (isRef(val)) {
    return val;
  }
  return new RefImpl(val);
}
// 最轻量化的拦截器 class 的 get set
class RefImpl {
  constructor(val) {
    // 私有
    this._isRef = true;
    this._val = convert(val);
  }
  get value() {
    track(this, 'get', 'value');
    return this._val;
  }
  set value(newVal) {
    if (newVal !== this._val) {
      this._val = convert(newVal);
      trigger(this, 'set', 'value');
    }
  }
}


function convert(val) {
  return isObject(val) ? reactive(val) : val;
}
function isRef(val) {
  // !! 取反两次 确保返回的是一个布尔值
  return !!(val && val._isRef);
}