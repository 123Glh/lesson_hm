// js 造人
// 对象字面量
let cao = {
  name: "小超",
}
let fan = {
  name: "范总",
  age: 18
}
//class es6
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  eat() {
    console.log("吃饭")
  }

}

let wei = new Person("小王", 18)
let zhang = new Person("小张", 20)