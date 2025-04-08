<template>
  <div>
    <ExposeChild ref="comp" />
    <button @click="handleClick">click</button>
  </div>
</template>

<script setup>
import ExposeChild from './ExposeChild.vue';
import { ref } from 'vue';
const comp = ref(null);
const handleClick = () => {
  console.log(comp.value.childName);
  comp.value.someMethod();
}
</script>

<style lang="scss" scoped>

</style>