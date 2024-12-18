//stack 类
class ArrayStack {
  // 类的属性
  // public 公有 类的外部，内部，子类 都可以访问
  // private 私有 类的外部，子类 不能访问
  // protected 保护 类的外部不能访问，子类可以访问
  #stack;  // 私有属性 正确 不会被污染
  //items;
  constructor() {
    this.#stack = [];
    // this.items = 1;
  }
  set push(num) {
    this.#stack.push(num);
  }
  pop() {
    return this.#stack.pop();
  }
  // 查看栈顶元素
  peek() {
    if (this.isEmpty) throw new Error('栈为空');
    return this.#stack[this.#stack.length - 1];
  }
  isEmpty() {
    return this.#stack.length === 0;
  }
  get size() {
    return this.#stack.length;
  }
}
const stack = new ArrayStack();
// console.log(stack.stack);
// stack.stack.push(1);
stack.push = 1;
stack.push = 2;
stack.push = 3;
console.log(stack.size);