let a = 10;
let b = a;
b = 20;
console.log(a); // 10 深拷贝 a不会改变

let arr = [1, 2, 3];
let arr2 = arr;
arr2[0] = 100;
console.log(arr); // [100, 2, 3] 浅拷贝 arr会改变

// 最基础深拷贝
function colon(obj) {
  if (typeof obj !== 'object') {
    return obj;
  }
  // let colonTarget = {}
  let colonTarget = Array.isArray(obj) ? [] : {};
  for (key in obj) {
    colonTarget[key] = colon(obj[key])
  }
  return colonTarget;
}
let obj = { a: 1, b: 2, c: { d: 3 } };
let obj2 = colon(obj);
obj2.c.d = 100;
console.log(obj); // { a: 1, b: 2, c: { d: 3 } } 深拷贝 obj不会改变

// 弱引用
// 深拷贝
function deepClone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    const isArray = Array.isArray(target);
    let colonTarget = isArray ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, colonTarget);
    // 性能优化
    const keys = isArray ? undefined : Object.keys(target);
    // 性能提升
    forEach(keys || target, (value, key) => {
      if (keys) {
        key = value;
      }
      colonTarget[key] = deepClone(target[key], map);
    })
  } else {
    return target;
  }
}