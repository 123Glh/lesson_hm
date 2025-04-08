function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
function co(gen) {
  const generator = gen(); // 创建生成器对象
  return new Promise((resolve, reject) => {
    function step(nextResult) {
      if (nextResult.done) { // 迭代完成
        return resolve(nextResult.value);
      }
      Promise.resolve(nextResult.value)
        .then(value => {
          console.log(value);
          return step(generator.next(value))
        })
        .catch(err => {
          reject(err)
        })
    }
    step(generator.next())
  })
}
co(
  numberGenerator
).then(
  res => {
    console.log(res)
  }
)