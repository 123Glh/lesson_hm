<template>
  <div>
    ParentOne
    <ChildOne :msg1="msg1" :msg2="msg2" />
  </div>
</template>

<script>
import ChildOne from './ChildOne.vue'
import { ref } from 'vue'
export default {
  data() {
    return {
      msg1: ref("这是传给子组件的信息1")
    }
  },
  setup() {
    // 打破 vue2 语法割裂逻辑的限制 把响应式数据和方法都放在 setup 中
    const msg2 = ref("这是传给子组件的信息2")
    return {
      msg2
    }
  },
  components: {
    ChildOne
  }
}

</script>

<style lang="scss" scoped>

</style>