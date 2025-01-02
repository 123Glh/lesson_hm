<script setup>
import LifecycleComponent from './components/LifecycleComponent.vue'
import { ref } from 'vue';
// option 选项式API -> 组合式 Composition API
const width = ref(100);
// 改变宽度的函数，每次点击增加 100px
const change = () => {
  width.value += 100;
}

// 控制子组件的显示与隐藏
const showComponent = ref(true);
const toggelComponent = () => {
  showComponent.value = !showComponent.value;
}
const count = ref(0);
// 增加计数的函数
const incrementCount = () => {
  count.value++;
}
</script>

<template>
  <div>
    <!-- 切换组件显示与否的按钮 -->
    <button @click="toggelComponent">Toggle Component</button>
    <!-- 增加计数的按钮 -->
    <button @click="incrementCount">Increment Count</button>
    <!-- 显示当前的计数值 -->
    <p>Count: {{ count }}</p>
    
    <!-- 使用 transition 来包裹生命周期组件，实现过渡效果 -->
    <transition name="fade">
      <!-- v-if 用于控制组件显示与隐藏 -->
      <LifecycleComponent v-show="showComponent" :count="count"/>
    </transition>
    
    <!-- 动态宽度的 box1 -->
    <div class="box1" :style="{width: width + 'px'}"></div>
    
    <!-- 控制宽度变化的按钮 -->
    <button @click="change">click</button>

    <!-- 用于调试显示当前宽度 -->
    <p>Current Width: {{ width }}</p>
  </div>
</template>

<style scoped>
/* box1 样式 */
.box1 {
  background-color: #4caf50;  /* 设置绿色背景，便于区分 */
  height: 100px;              /* 设置高度为 100px，确保 box 显示出来 */
  transition: width 1s ease-in-out; /* 使宽度变化时具有平滑过渡效果，过渡时间为 1 秒，效果为 ease-in-out */
}

/* 定义过渡效果 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out;  /* 设置透明度的过渡，时间为 1 秒 */
}

.fade-enter, .fade-leave-to /* .fade-leave-active 在离开时会生效 */
{
  opacity: 0; /* 初始透明度为 0，离开时透明度为 0，达到淡出的效果 */
}
</style>
