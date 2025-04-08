<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/page-a">Page A</router-link>
    <router-link to="/page-b">Page B</router-link>
    <!-- <Home />
    <component :is="visComponent" /> -->
    <hr>
    <router-view v-slot="{ Component }"> <!-- 缓存组件 -->
                    <!--指定要缓存的组件 -->
      <keep-alive :include="['Home', 'PageA', 'PageB']">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <hr>
    <button @click="show = !show">切换组件</button>
    <!-- 使用transition组件包裹需要过渡效果的组件 -->
    <transition name="fade1">
      <div v-if="show" style="background: #f00;height: 100px;width: 100px;"></div>
    </transition>
    <hr>
    <transition name="fade2">
      <div v-if="show" style="background: #f00;height: 100px;width: 100px;"></div>
    </transition>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
// import Home from './components/Home.vue';
// import PageA from './components/PageA.vue';
// const visComponent = ref(Home);
// setTimeout(() => {
//   visComponent.value = PageA;
// }, 3000);
import { ref } from 'vue';
const show = ref(false);
</script>

<style scoped>
.fade1-enter-active {
  transition: all 1s ease;
}
.fade1-leave-active {
  transition: all 1s ease;
}
.fade1-enter-from, .fade1-leave-to {
  opacity: 0;
}
.fade2-enter-active {
  transition: all 1s ease;
}
.fade2-leave-active {
  transition: all 1s ease;
} 
.fade2-enter-from,.fade2-leave-to {
  transform: translateX(100px);
}
</style>