function bubbleSort(arr) {
  const len = arr.length;
  // swap 倒数第二个和倒数第一个
  for (let i = 0; i < len - 1; i++) {
    // len - i - 1 最后的 i 个已经排好序了
    for (let j = 0; j < len - i - 1; j++) {
      // es6 解构赋值
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// 提前终止 最快 O(n) 已是有序
function optimizeBubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let flag = false; // 提前终止
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = true;
      }
    }
    if (!flag) break; // 如果没有交换，说明已经有序，提前终止
  }
  return arr;
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort(arr)); // [2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
