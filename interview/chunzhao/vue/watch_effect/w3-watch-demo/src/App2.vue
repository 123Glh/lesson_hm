<template>
  <div>
    {{ count }}
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const count = ref(0)
// 参数1 依赖的响应式数据 参数2 回调函数
watch(count,(newvalue,oldValue) =>{
  console.log(`count changed from ${oldValue} to ${newvalue}`)
},{
  immediate: true, // 立即执行回调函数
})

setTimeout(() =>{
  count.value++;
},1000)

</script>

<style scoped>

</style>