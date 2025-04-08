Object.create2 = function (proto, propertyObject = undefined) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('Object prototype may only be an Object or null: ' + proto);
  }
  if (propertyObject === null) {
    throw new Error('Cannot convert undefined or null to object');
  }
  function F() { }
  F.prototype = proto;
  const obj = new F();
  if (propertyObject !== undefined) {
    Object.defineProperties(obj, propertyObject);// 定义属性
  }
  if (proto === null) {
    obj.__proto__ = null; // 避免原型链污染 
  }
  return obj;
}