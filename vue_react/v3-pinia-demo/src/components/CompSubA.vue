<template>
  <div>
    CompSubA
    {{ counterStore.count }}
    <h2>{{ counterStore.count }}</h2>
    <!-- {{ props.count }} -->
    <!-- <button @click="addcount">Add</button> -->
  </div>
</template>

<script setup>
// import { defineProps, defineEmits } from 'vue';
// const props = defineProps({
//   count: {
//     type: Number,
//     required: true
//   }
// });
// const emits = defineEmits(['add']);
// function addcount() {
//   emits('add');
// }
import { toRef } from 'vue';
import { useCounterStore } from '../store/counter';
const counterStore = useCounterStore();
// const { count } = counterStore; // 响应式 丢失
const { count } = toRef(counterStore);
</script>

<style scoped>

</style>