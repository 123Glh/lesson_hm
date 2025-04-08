function filterByType(arr, type) {
  // es6 filter方法
  return arr.filter(a => {
    const itemType = typeof a; // 类型
    if (type === 'object') {
      return a !== null && itemType === type && !Array.isArray(a);
    }
    if (type === 'array') {
      return Array.isArray(a);
    }
    return itemType === type;
  })
}

console.log(filterByType([1, 2, 3, "a", "b", 4, null, [1, 2, 3]], "array"));