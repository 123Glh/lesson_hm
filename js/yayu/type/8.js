console.log([1,2,3].map(parseInt)); // [1, NaN, NaN]
// parseInt(1,0)
// parseInt(2,1)
// parseInt(3,2)
console.log([1,2,3].map((a,index,item)=>{
  console.log(a,index,item);
  return parseInt(a,index);
})); // [1, NaN, NaN]

console.log([1,2,3].map((a)=>parseInt(a)))// [1, 2, 3]