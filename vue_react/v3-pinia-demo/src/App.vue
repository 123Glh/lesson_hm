<script setup>
//import {ref} from 'vue'
import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'
import { useUserStore } from './store/user'
import { toRefs } from 'vue'
const userStore = useUserStore()
const { islogin,userInfo } = toRefs(userStore)
const {tologin,tologout,setUserInfo} = userStore
// const count = ref(0)
// function increment(){
//   count.value++
// }
const login= () => {
  tologin();
  setUserInfo();
}
</script>

<template>
  <div>
    <div v-if="islogin">
      <img :src="userInfo.avatar">
    </div>
    <div v-else>
      <button @click="login">登入</button>
    </div>
    <!-- <CompA :count="count" @add="increment"/> -->
    <!-- <compB :count="count" /> -->
    <compA />
    <compB />
  </div>
</template>

<style scoped>
</style>
