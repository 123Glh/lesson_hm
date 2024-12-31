<script setup>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppSide from './components/AppSide.vue'
</script>

<template>
  <div class="container">
    <AppHeader />
    <div class="flx">
      <AppMain />
      <AppSide />
    </div>
  </div>
</template>

<style scoped>
.flx{
  display: flex;
}
</style>