// 编写一个函数，[1,2,3,4,5,6,7,8,9,10]
// return "(123) 456-7890" 电话号码
function getPhoneNuum(arr) {
  return "(" + arr[0] + arr[1] + arr[2] + ")" + " " + arr[3] + arr[4] + arr[5] + "-" + arr[6] + arr[7] + arr[8] + arr[9]

}
console.log(getPhoneNuum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
function getPhoneNum2(arr) {
  // 模板字符串  提升代码的可读性
  return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
}
console.log(getPhoneNum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function getPhoneNum3(arr) {
  let format = "(xxx) xxx-xxxx"
  for (let i = 0; i < arr.length; i++) {
    format = format.replace("x", arr[i])
  }
  return format
}
console.log(getPhoneNum3([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))