const personProto = { greet() { return 'Hello' } }; // 通过对象字面量创建原型对象
// 比HJSON方便 指定原型
const person = Object.create(personProto, { age: { value: 30 } });
person.name = 'John';
console.log(person, person.__proto__);
console.log(person.age); // 30
// console.log(person.greet()); // Hello

// const pureObject = Object.create(null);
// console.log(pureObject);
