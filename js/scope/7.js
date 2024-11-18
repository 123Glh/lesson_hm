function foo() {
  b = 2;   //LHS查询 默认声明变量
}
foo()
// 这里的b是全局变量
console.log(b)

// function foo() {
//   var b = 2;   //LHS查询 默认声明变量
// }
// foo()
// console.log(b)