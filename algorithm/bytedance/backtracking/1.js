const letterMap = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
function letterCombinations(digits) {
  //回溯算法
  const result = [];
  const path = [];  //某一种路径(组合)
  if (digits.length === 0) return result;

  function backtracking(i) {
    if (i === digits.length) {
      result.push(path.join(""));
      return;
    }
    const letters = letterMap[digits[i]];
    for (let j = 0; j < letters.length; j++) {
      path.push(letters[j]);//开始处理
      backtracking(i + 1);  //递归
      path.pop();           //打扫战场 回溯
    }
  }
  backtracking(0);

  return result;
}
console.log(letterCombinations("23"));