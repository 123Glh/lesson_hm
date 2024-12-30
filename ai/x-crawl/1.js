const obj = { name: "guo", age: 20, hobbies: ["交友", "喝酒", "下棋"] }
const { name, age } = obj
console.log(name, age)
const hobbies = obj.hobbies
console.log(hobbies)
const a = [1, 2, 3, 4, 5]
const b = [7, 8, 9]
const c = [...a, ...b]
console.log(c)