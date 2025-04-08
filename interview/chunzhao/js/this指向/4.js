// 对象中的this指向问题
// 对象中的this指向由于调用它的对象决定
function Person(name) {
  this.name = name;
  this.greet = function () {
    console.log('Hello, my name is ' + this.name);
  };
}

const alice = new Person('Alice');
alice.greet();  // 输出: Hello, my name is Alice