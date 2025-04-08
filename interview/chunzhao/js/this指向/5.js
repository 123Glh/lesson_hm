// call
var a = 1000;
const c = {
  a: 1,
  b: function (t) {
    console.log(t + this.a);
  }
}
const obj = {
  a: 2,
}
c.b.call(obj, 'hello');

// apply
const app = {
  a: 2,
  b: function (...args) {
    console.log(args.join() + this.a);
  }
}
const args = ['hello', 'world'];
app.b.apply(obj, args);

// bind
const bin = {
  a: 1,
  b: function (...args) {
    console.log(args.join() + this.a);
  }
}
bin.b.bind(obj)(args);