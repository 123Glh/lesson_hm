// 基本数据类型的显式类型之间的转换之Number
// Number 

console.log(Number()); //0
console.log(Number(undefined)); //NaN undefined在数值上下文中没有特定的数字的含义
console.log(Number(null)); //0
console.log(Number(true)); //1
console.log(Number(false)); //0

console.log(Number('123')); //123
console.log(Number('-123')); //-123
console.log(Number('123abc')); //NaN
console.log(Number("0x11")); //17  16进制
console.log(Number(""),Number(" ")); //0 0