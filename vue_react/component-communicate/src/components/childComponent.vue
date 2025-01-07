<template>
  <div>
    <h2>{{ title }}</h2>
    <button @click="sentMessageToParent">发送信息给父组件</button>
  </div>
</template>

<script setup>

import {
   defineProps,
   defineEmits,
   ref
   } from 'vue';

const chileMessage=ref('Hello Parent!')

defineProps({
  title:{
    type:String,
    required:true
  }
})
const emit = defineEmits(['child-message'])
const sentMessageToParent = () =>{
  emit('child-message',chileMessage.value)
}
</script>

<style scoped>

</style>