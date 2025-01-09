import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// vue 全家桶的最后一个 状态管理库
import { createPinia } from 'pinia'
// 大型项目
// pinia 的实例 vue 全家桶中的Store 
const pinia = createPinia()
createApp(App)
  .use(pinia)
  .mount('#app')