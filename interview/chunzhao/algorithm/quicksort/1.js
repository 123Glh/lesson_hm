function quickSort(arr) {
  // 递归终止条件
  if (arr.length <= 1) {
    return arr;
  }
  // 基准值
  const pivot = arr[Math.floor(arr.length / 2)];
  // 分区
  const left = arr.filter(x => x < pivot);
  const right = arr.filter(x => x > pivot);
  // 递归
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([1, 3, 5, 2, 4, 6]));
