function isPalindrome(str) {
  let left = 0, right = str.length - 1; // 初始化左右指针
  while (left < right) {
    if (str[left] !== str[right]) { // 比较左右指针所指的字符是否相等
      return false; // 如果不相等，返回 false
    }
    left++;
    right--;
  }
  return true;
}