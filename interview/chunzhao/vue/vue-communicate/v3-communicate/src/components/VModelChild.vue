<template>
  <div>
    {{ value }}
    <button @click="handleClick">click</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:value']);
defineProps(['value'])
const handleClick = () => {
  emit('update:value', '新的value');
}
</script>

<style scoped>

</style>