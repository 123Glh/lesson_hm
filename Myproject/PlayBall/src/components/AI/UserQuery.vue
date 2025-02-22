<template>
  <div class="user-message flex justify-end mb-4">
    <div class="max-w-[80%] bg-white rounded-lg p-3 shadow">
      {{ msg }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>