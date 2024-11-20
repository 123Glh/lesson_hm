var a = 1
function fn(a) {
  var a = 2           // 变量表达式 
  function a() { }   // 函数表达式 变量被提升 所有被覆盖了
  var b = a
  console.log(a)
}
fn(3)