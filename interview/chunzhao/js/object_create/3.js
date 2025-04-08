// 创建对象
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

// 合并对象
// const result = Object.assign({}, target, source);// 合并对象 浅拷贝 会改变target
// console.log(result, result.__proto__); // { a: 1, b: 4, c: 5 }
// console.log(target); // { a: 1, b: 4, c: 5 }

const result = { ...target, ...source }; // 合并对象  不会改变target 
console.log(result, result.__proto__); // { a: 1, b: 4, c: 5 }
console.log(target); // { a: 1, b: 2 }