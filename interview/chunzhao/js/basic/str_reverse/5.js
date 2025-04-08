function reverseStr(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

console.log(reverseStr('abc')); // 输出: "cba"