// 递归
//时间复杂度：O(logN)
function fun1(x, n) {
  // 退出条件
  if (n === 0) {
    return 1
  }
  // 把问题分解成规模更小的子问题 自顶向下
  return x * fun1(x, n - 1)
}
console.log(fun1(2, 11))