//生成一个18岁到55岁的随机年龄
function getRandomAge(min, max) {
  return Math.floor(Math.floor(Math.random() * (max - min + 1) + min))
}
console.log(getRandomAge(18, 55))