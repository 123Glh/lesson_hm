const MinStack = function () {
  this.stack = [];  // 原栈
  this.stack2 = [] // 辅助栈
};
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  // 为什么要等于  为了出栈的时候
  if (this.stack2.length === 0 || this.stack2[this.stack2.length - 1] >= x) {
    this.stack2.push(x);
  }
};
MinStack.prototype.pop = function () {
  if (this.stack.pop() === this.stack2[this.stack2.length - 1]) {
    this.stack2.pop();
  }
};
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1];
};