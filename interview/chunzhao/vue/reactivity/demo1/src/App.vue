<template>
  <div>
  </div>
</template>

<script setup>
// 验证 reactive 
import { reactive } from './reactivity';
import { effect } from './reactivity';

let r1;
let r2;
const obj = reactive({
  name:'zhangsan',
  age:18,
  dog:{
    name:'wangcai',
    age:3
  }
})
effect(()=>{
  r1 = obj.name // 这里会触发 obj.name 的 get 收集依赖
  r2 = obj.dog.name
})
// 验证 浅层响应
console.log("reactive 的 浅层响应");
console.log(r1);
r1 = "lisi"
console.log(r1);

// 验证 深层响应
console.log("reactive 的 深层响应");
console.log(r2);
obj.dog.name = "wangcai2"
console.log(r2);

// 验证 shallowReactive

import { shallowReactive } from './reactivity';
let s1;
let s2;
const obj2 = shallowReactive({
  name:'zhangsan',
  age:18,
  dog:{
    name:'wangcai',
    age:3
  }
})
effect(()=>{
  s1 = obj2.name // 这里会触发 obj.name 的 get 收集依赖
  s2 = obj2.dog.name
})
// 验证 shallowReactive 浅层响应 生效
console.log("shallowReactive 的 浅层响应");
console.log(s1);
s1 = "lisi"
console.log(s1);

// 验证 shallowReactive 深层响应 失效
console.log("shallowReactive 的 深层响应");
console.log(s2);
obj2.dog.name = "wangcai666"
console.log(s2,"shallowReactive 的 深层响应 失效");


// 验证 ref
import { ref } from './reactivity';
const e = ref(1)
let f;
effect(()=>{
  f = e.value
})
console.log("ref 的 响应");
console.log(f);
e.value = 2
console.log(f);

</script>

<style  scoped>

</style>