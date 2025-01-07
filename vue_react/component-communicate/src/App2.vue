<script setup>
// compositiion api
import {
  ref,         // 简单数据类型
  reactive,    // 复杂数据类型
} from 'vue'

// 组合API
// counter 计数业务
const counter = ref(0);  // 简单数据类型
const increment = () =>{
  counter.value++   // value 
}

// user form 对象数据业务
const state = reactive({
  name:'Alice',
  age:25
})
const updateState = () =>{
  state.name = 'Bob',
  state.age++
}

</script>

<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="increment">increment</button>

    <p>Name:{{ state.name }}</p>
    <p>Age:{{ state.age }}</p>
    <button @click="updateState">update State</button>
  </div>
</template>

<style scoped>
</style>