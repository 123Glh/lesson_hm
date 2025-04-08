function advancedBubbleSort(arr) {
  let len = arr.length;
  let lastSwapPos = len - 1; // 最后一次交换的位置;
  const swapBorder = len - 1; // 本轮需要比较到的位置;
  for (let i = 0; i < len - 1; i++) {
    let swapped = false; // 本轮是否交换过;
    lastSwapPos = 0; // 重置最后一次交换的位置;
    for (let j = 0; j < swapBorder; j++) { // 比较到 swapBorder 位置;
      if (arr[j] > arr[j + 1]) { // 交换;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true; // 本轮交换过;
        lastSwapPos = j; // 更新最后一次交换的位置;
      }
    }
    swapBorder = lastSwapPos; // 更新本轮需要比较到的位置;
    if (!swapped) break; // 本轮没有交换，提前终止;
  }
  return arr;
}