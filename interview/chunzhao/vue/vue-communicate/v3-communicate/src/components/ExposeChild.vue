<template>
  <div>
    ExposeChild
  </div>
</template>

<script setup>
defineExpose({
  childName: 'child',
  someMethod: () => {
    console.log('someMethod');
  }
})
</script>

<style scoped>

</style>