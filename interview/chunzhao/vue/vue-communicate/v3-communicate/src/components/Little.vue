<template>
  <div>
    Little
    {{ name }}
  </div>
</template>

<script setup>
import { inject } from 'vue';
const name = inject("name")
// console.log(name)
</script>

<style scoped>

</style>