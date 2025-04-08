function huiwen(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str.length === 2) {
    return str[0] === str[1];
  }
  return huiwen(str.slice(1, str.length - 1)) && str[0] === str[str.length - 1];
}
console.log(huiwen("abccca")); // true