<template>
  <div>
    <EmitChild @myclick="onMyClick" />
  </div>
</template>

<script setup>
import EmitChild from './EmitChild.vue';
const onMyClick = (msg) => {
  console.log(msg);
}
</script>

<style scoped>

</style>
