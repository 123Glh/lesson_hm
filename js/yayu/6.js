function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.name = '孔子'
Person.prototype.age = 18
Person.prototype.hometown = '山东'
let p1 = new Person("zhang", 18)
let p2 = new Person("Guo", 19)
console.log(p1.name, p1.hometown)