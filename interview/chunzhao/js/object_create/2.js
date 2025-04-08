// 手写 new
function myNnew(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype);
  const result = Constructor.apply(obj, args);     // 执行构造函数
  return (result && typeof result === 'object') ? result : obj;  // 如果构造函数返回对象，则返回该对象，否则返回新创建的对象
}