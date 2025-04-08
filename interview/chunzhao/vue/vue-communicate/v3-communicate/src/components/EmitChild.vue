<template>
  <div>
    <button @click = "handleClick">按钮</button>
    <button @click="emit('myclick','hello')">按钮</button>
  </div>
</template>

<script setup>
const  emit = defineEmits(['myclick'])
const handleClick = () => {
  emit('myclick','hello')
}
</script>

<style scoped>

</style>