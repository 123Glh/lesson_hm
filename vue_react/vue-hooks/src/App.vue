<script setup>
import mousepos from './components/MousePos2.vue'
import { ref } from 'vue'
const showMouse = ref(true)
const toggleMouse = () =>{
    showMouse.value = !showMouse.value
}
</script>

<template>
  <div>
    <mousepos v-if="showMouse"/>
    <button @click="toggleMouse">切换显示</button>
  </div>
</template>

<style scoped>
</style>
