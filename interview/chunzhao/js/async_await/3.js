// then -> generator * yield -> co -> async await
// 手写 async await
function asyncToGenerator(generatorFunc) {
  return function () {
    const gen = generatorFunc.apply(this, arguments);
    return new Promise((resolve, reject) => {
      function step(key, arg) {
        let generatorResult; // 生成器的返回结果;
        try {
          generatorResult = gen[key](arg) // 调用生成器的 next 方法，传入参数 arg，获取生成器的返回结果
        } catch (err) { // 捕获错误
          return reject(err)
        }
        const { value, done } = generatorResult;
        if (done) {
          return resolve(value)
        } else {
          return Promise.resolve(value).then(val => {
            step('next', val)
          }, err => {
            step('throw', err)
          })
        }
      }
      step("next")
    })
  }
}
// 生成器函数
function* testGenerator() {
  const result1 = yield Promise.resolve('Hello');
  console.log(result1); // Hello
  const result2 = yield Promise.resolve('World');
  console.log(result2); // World
  return 'done';
}
const asyncFunc = asyncToGenerator(testGenerator);
asyncFunc()
  .then(finalResult => {
    console.log('最终结果', finalResult);
  })