<template>
  <div class="start-overlay" @click="$emit('click')">
    <h2>欢迎使用 AI 助手</h2>
    <p>点击开始对话</p>
  </div>
</template>

<script setup lang="ts">
defineEmits(['click']);
</script>

<style scoped>
.start-overlay {
  @apply fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center;
  backdrop-filter: blur(5px);
  z-index: 9999;
}
</style>