// 箭头函数 的 this 指向
// this.a = 1;  // 挂载在全局上的属性 可以通过 window.a 访问
var a = 1;  // 变量
const jian = {
  a: 1,
  b: 2,
  fn: () => {
    console.log(this.a);
  }
}
jian.fn(); // 在node 环境中 输出 undefined 在浏览器中输出 1
// 箭头函数没有 自己的 this 它无法创建自己的上下文 单纯继承了父级的上下文
const obj = {
  a: 500,
}
jian.fn.call(obj); // 任然是 undefined
//箭头函数无法通过 call apply bind 改变 this 的指向