//ReferenceError: b is not defined
//RHS 查找 失败时，会爆出  ReferenceError 异常
function foo(a) {
  console.log(a + b)
  b = a
}
foo(2)