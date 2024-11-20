console.log(fn())    // 函数提升  并且函数提升的优先级高于变量提升
function fn() {
  return 10 + 20
}

console.log(a)   // 变量提升 undefined
var a = 10

console.log(b)   // let 和 const暂时性死区  报错
let b = 20

