// false | true
// Primitive -> Boolean
// 构造函数  来用
console.log(Boolean());           // 默认值为false
console.log(Boolean(false));      //false
console.log(Boolean(true));       //true
console.log(Boolean(undefined));  //false
console.log(Boolean(null));       //false
console.log(Boolean(0));          //false
console.log(Boolean(+0));         //false
console.log(Boolean(-0));         //false
console.log(Boolean(NaN));        //false
console.log(Boolean(''));         //false
console.log(Boolean(' '));        //true  空格也是true 它是一个字符
