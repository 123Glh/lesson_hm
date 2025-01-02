<template>
  <div>
    <div>
      <p  id="count">Lifecycle Component - Count:{{ count }}</p>
    </div>
  </div>
</template>

<script setup>
import { 
  defineProps,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
 } from 'vue';
defineProps({
  count:{
    type:Number,
    required:true
  }
})
//console.log('haha');
onBeforeMount(() => {
  // 挂载之前
  console.log('挂载之前');
  
})
// 组件有生老病死 
onMounted(() => {
  // on 某个阶段
  // mounted 挂载
  // 已经完成了挂载
  console.log(document.getElementById('count'),'------------');
  console.log('已经挂载');  
})
onBeforeUnmount(() => {
  // 卸载之前
  console.log('卸载之前');
})
onUnmounted(() => {
  // 卸载之后
  console.log('卸载之后');
})
onBeforeUpdate(() => {
  // 更新之前
  console.log('更新之前');
})
onUpdated(() => {
  // 更新之后
  console.log('更新之后');
})
</script>
<style scoped>

</style>