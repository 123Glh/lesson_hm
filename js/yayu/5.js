const cy = {
  name: 'wu',
  playBasketball: function () {
    console.log('打篮球')
  }
}
function Person(age) {
  this.age = age
}

Person.prototype = cy
// 原型? cy

const wen = new Person(18)
wen.playBasketball()
console.log(wen.name, wen.age)
console.log(wen.__proto__ === cy)