<template>
  <div>
    <Child />
    <button @click="change">change</button>
  </div>
</template>

<script setup>
import Child from './Child.vue';
import { computed, provide, ref } from 'vue';
const count = ref("绿盟")
const double = computed(() => count.value)
provide("name",double) // key value
const change = () =>{
  count.value = "111"
}
</script>

<style scoped>

</style>