console.log(1/+0);   //正无穷大 
console.log(1/-0);   //负无穷大
console.log(1/ 0);   //
console.log(Object.is(5,5));
console.log(Object.is(+0,-0));
//               隐式转换
console.log(2*"a",2+"a");  //Nan:Not a Number       2a
console.log(undefined+'1',undefined+1); //undefined1 NaN
console.log(typeof NaN)  //number
console.log(parseInt('abc'));  //NaN
console.log(parseInt('12abc')); //12
console.log(parseInt('abc12')); //NaN
// 不能通过===NaN 去判断，需要使用isNaN()方法
console.log(NaN===NaN); //false   NaN不代表确切值，
console.log(isNaN(NaN),isNaN(parseInt('abc'))); // true true   