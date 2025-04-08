function longestPalindrome(s) {
  if (s.length < 2) {
    return s;
  }
  let start = 0, maxLength = 1; // 初始化最长回文子串的起始位置和长度
  // 最小的回文 一个字符 左边和右边相等 字符串是奇数
  // 两个字符   字符串是偶数
  function expandAroundCenter(left, right) { // 扩展中心
    // 四周去扩
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) { // 如果当前回文子串的长度大于之前的最长回文子串的长度
        maxLength = right - left + 1; // 更新最长回文子串的长度
        start = left; // 更新最长回文子串的起始位置
      }
      left--;
      right++;
    }
  }
  for (let i = 0; i < s.length; i++) { // 遍历字符串中的每个字符
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1)
  }
  return s.substring(start, start + maxLength);
}