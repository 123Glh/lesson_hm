<template>
  <div>
    <h2>父组件</h2>
    <p>来自子组件的消息：{{ messageFromChild }}</p>
    <ChildComponent @child-message="handleChildMessage" :title="title"/>
  </div>
</template>

<script setup>
// @ 事件 不是js 内置事件，自定义事件
// 父子组件通信
import {
        ref
       } from 'vue'
import ChildComponent from  './components/childComponent.vue'
const title = ref("来自父组件的消息")
// 定义 messageFromChild
const messageFromChild = ref("") 
// 自定义事件 child-message 父子组件的约定  子组件调用child-message 告知父组件
const handleChildMessage = (message) =>{
  console.log('子组件发送消息',message);
  // 更新 messageFromChild
  messageFromChild.value = message;
}
</script>

<style scoped>

</style>