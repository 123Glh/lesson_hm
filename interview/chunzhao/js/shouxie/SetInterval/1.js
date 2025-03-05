// 第 1 题：写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,...,a+nb 的时间，然后写一个 myClear，停止上面的 mySetInterVal

function mySetInterVal(fn, a, b) {
  this.a = a;
  this.b = b;
  this.time = 0;
  this.handle = -1;
  this.start = () => {  // 箭头函数的this指向是固定的，指向定义时的this
    this.handle = setTimeout(() => {    // 这里的this指向的是window
      console.log(this.a + this.b * this.time);
      console.log(this);
      fn();
      this.time++;
      this.start();
    }, this.a + this.b * this.time)
  }
  this.stop = () => {
    clearTimeout(this.handle);
    this.time = 0;
  };
}

const a = new mySetInterVal(() => {
  console.log('hello');
}, 1000, 2000);
a.start();
setTimeout(() => {
  a.stop();
}, 10000);