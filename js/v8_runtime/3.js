function bar() {
  console.log(myname)
}
function foo() {
  var myname = 'zhangsan'
  bar()
  console.log(myname)   //zhangsan
}
var myname = 'lisi'
foo()