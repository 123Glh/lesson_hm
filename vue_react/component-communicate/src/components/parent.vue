<template>
  <div>
    <Child ref="comp"/>
    <button @click="handlerClick">按钮</button>
  </div>
</template>

<script setup>
import Child from './child.vue'
import {
  ref
} from 'vue'
const comp = ref(null)   // 标记一个DOM元素   null  组件还没有挂载，DOM也不在
const title=ref('hello') // 标记一个普通变量
const handlerClick = () =>{
  comp.value.childName='这是修改后的子组件的属性'
  console.log(comp.value);
  console.log(title.value);
  comp.value.someMetthod()
}
</script>

<style scoped>

</style>