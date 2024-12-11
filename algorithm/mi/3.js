//求x的n次方
// 快速幂算法:
// 时间复杂度：O(logn)
function func(x, n) {
  if (n === 0) {
    return 1
  } else if (n % 2 === 0) {
    let result = func(x, n / 2)
    return result * result
  } else {
    let result = func(x, (n - 1) / 2)
    return result * result * x
  }
}
console.log(func(2, 11))