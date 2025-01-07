<template>
  <div>
    <p>
      Mouse X: {{ mousePos.x }}
    </p>
    <p>
      Mouse Y: {{ mousePos.y }}
    </p>
  </div>
</template>

<script setup>
import {
  // composition api
  reactive,
  onMounted,    // 生命周期 life cycle 
  onUnmounted
} from 'vue'
// const x = ref(0)
// const y = ref(0)
const mousePos = reactive({
  x: 0,
  y: 0
})
const mousePosHandler=(e) =>{
    mousePos.x = e.clientX
    mousePos.y = e.clientY
    console.log('我还在');
}

onMounted(() =>{
  window.addEventListener('mousemove',mousePosHandler)
})
onUnmounted(() =>{
  window.removeEventListener('mousemove',mousePosHandler)
})
</script>

<style scoped>

</style>