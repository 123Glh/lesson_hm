// 默认情况下，this指向全局对象
function greet() {
  console.log('Hello, ' + this.name);
}

this.name = 'Global'; // 在全局环境中定义一个全局变量
// var name = 'Global'; // 在全局环境中定义一个全局变量


// 调用函数，此时函数被独立调用 this指向全局
greet(); // 输出: Hello, John