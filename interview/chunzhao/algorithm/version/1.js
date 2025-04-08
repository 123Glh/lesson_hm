function compareVersion(version1, version2) {
  const v1Parts = version1.split('.').map(Number); // 将版本号拆分为数字数组
  const v2Parts = version2.split('.').map(Number)

  const maxLength = Math.max(v1Parts.length, v2Parts.length);
  for (let i = 0; i < maxLength; i++) {
    const v1Part = v1Parts[i] || 0;
    const v2Part = v2Parts[i] || 0;

    if (v1Part < v2Part) {
      return -1;
    } else if (v1Part > v2Part) {
      return 1;
    }
  }
  return 0;
}
console.log(compareVersion("1.0.1", "2.0.0"));
