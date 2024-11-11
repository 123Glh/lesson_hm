const len = arr.length;

//此循环 遍历 
// for (let i=0;i<len;i++){
//   console.log(arr[i],i)
// }

// forEach 遍历                        //这种遍历方法的性能较差
arr.forEach(function (item, index) {
  console.log(item, index)
})