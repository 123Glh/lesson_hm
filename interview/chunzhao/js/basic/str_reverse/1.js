function reverseStr(str) {
  // 类型校验
  if (typeof str !== 'string') {
    return 'please input a string';
  }
  // 字符数组
  // 反转的字符数组
  // 变成字符串
  return str.split('').reverse().join('');
}
console.log(reverseStr('abc'));