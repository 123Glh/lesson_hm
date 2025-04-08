<template>
  <div>
    ChildTow
    {{msg2}}
    {{msg1}}
    {{ msg3 }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  msg1:String,
  msg2:String,
  msg3:Number
}>()
</script>

<style lang="scss" scoped>

</style>