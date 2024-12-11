const key = 'abc123'
let points = 50
let winner = false

const person = {
  name: "wes",
  age: 28
}
// 函数是对象，静态方法 属于类的
// const wes = Object.assign({}, person)
// wes.age = 30
// console.log(wes, person)


//不可写 writeable
// 冻结对象 冻结后不能修改
const wes = Object.freeze(person)
person.age = 30
wes.hometown = 'UK'
console.log(wes, person)