let obj = {

}
Object.defineProperties(obj, {
  a: {
    value: 1,
    enumerable: true, // 不可枚举
  },
  b: { value: 2 }
})
for (const key in obj) {
  console.log(key); // a b
}