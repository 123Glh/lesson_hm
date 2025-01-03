<template>
  <div>
    <div>PostShow {{ postid }}</div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()  // 当前路由
console.log(route);
const { postid } = route.params
</script>

<style scoped>

</style>