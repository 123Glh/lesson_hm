// map 和 json 的区别
// json 的key 只能是字符串
// map 的key 可以是任意类型
// weakmap 弱引用
// let obj = {
//   a: 1,
// }
// const map = new Map(); // 键值对
// map.set('a', 1);
// map.set(obj, 2); // 引用类型
// map.set(function () { }, 3);
// console.log(map);
// let obj2 = {
//   obj: 1
// }
// console.log(typeof obj2["obj"]);

// delete obj;  // 手动删除 obj 触发垃圾回收机制
// console.log(map.get(obj));  // 还是能拿到

const weakMap = new WeakMap();
weakMap.set(obj2, 1);  // 弱引用 不会来回拉扯
console.log(weakMap.get(obj2));
weakMap.delete(obj2);
console.log(weakMap.get(obj2));