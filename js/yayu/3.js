function Person(name, age) {
  console.log(this)
  this.name = name
  this.age = age
}

Person('昌总', 19)                             // 普通函数 
const person = new Person('范总', 18)          // 构造函数 
const person2 = new Person('wei总', 18)        // 构造函数 