<template>
  <div>
    ParentTow
    <ChildTow :msg2="msg2" :msg1="msg1" :msg3="msg3"/>
  </div>
</template>

<script setup>
import ChildTow from './ChildTow.vue'
import { ref,reactive } from 'vue'
const msg2 = ref("这是传给子组件的信息2")
const msg1 = ref("这是传给子组件的信息1")
const msg3 = ref(123)
</script>

<style scoped>

</style>