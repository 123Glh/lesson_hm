<template>
  <div>
    ComponentB
  </div>
</template>

<script setup>
import mitt from '../mitt'
import { onUnmounted } from 'vue';
const someMethod = () =>{
  console.log("someMethod")
}
const someMethod2 = () =>{
  console.log("someMethod2")
}
// 消息机制 EventBus
mitt.on("handleChange",someMethod)
mitt.on("handleChange",someMethod2)
onUnmounted(() => {
  // 移除监听
  mitt.off("handleChange",someMethod)
})
</script>

<style lang="scss" scoped>

</style>