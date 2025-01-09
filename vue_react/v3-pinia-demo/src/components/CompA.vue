<template>
  <div>
    <h2>CompA</h2>
    <!-- <p>count: {{props.count}}</p> -->
    <p>count: {{counterStore.count}}</p>
    <!-- <button @click="addcount">Add</button> -->
    <button @click="counterStore.increment">Add</button>
    <!-- <CompSubA :count="props.count" @click="addcount"/> -->
    <compSubA/>
  </div>
</template>

<script setup>
// 引入中央模块
import { useCounterStore } from '../store/counter'
const counterStore = useCounterStore()   // 本地和中央连接的过程
import CompSubA from './CompSubA.vue';
// console.log(counterStore);
// const {count,increment} =counterStore;
// import { defineProps,defineEmits } from 'vue';
// import CompSubA from './CompSubA.vue';
// const props=defineProps({
//   count: {
//     type: Number,
//     required: true
//   }
// })
// const emits=defineEmits(['add'])
// function addcount(){
//   emits('add')
// }
</script>

<style scoped>

</style>