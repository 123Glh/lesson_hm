function traverse(arr) {
  var len = arr.length;     // 1 次
  for (var i = 0; i < len; i++) {   // 1 + n + 1 + n 次
    console.log(arr[i]);      // n
  }
}
// T(n)=(1+1+n+1+n+n)=3n+3=O(n)    n趋于无穷的时候 3n+2 无限接近 n  所以时间复杂度为O(n)
// 代码的执行次数 T(n)
traverse();