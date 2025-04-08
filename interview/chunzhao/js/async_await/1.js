// async 异步 sync 同步 函数内部可以使用 await 命令，暂停异步操作。
// 函数修饰符
// 生成器函数 抽象
// 代码的编写顺序 和 执行顺序 要是一致的
// * 表示生成器函数 返回一个生成器对象 生成器对象可以迭代
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
// 生成器函数执行 得到一个生成器对象 
// 可迭代 interable 迭代器 iterator 迭代器对象
const gen = numberGenerator(); // 创建生成器对象
// 生成器的状态
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next()); // { value: undefined, done: true } 迭代完成