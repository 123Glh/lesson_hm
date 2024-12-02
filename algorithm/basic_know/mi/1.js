//求x的n次方
// 1. 暴力解法
// 时间复杂度：O(n)
function pow(x, n) {
  let result = 1
  for (let i = 0; i < n; i++) {
    result *= x
  }
  return result
}