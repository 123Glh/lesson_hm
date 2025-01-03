import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 自动导入index.js 文件
import router from './router'  // 路由对象

createApp(App)    // vue 根组件 ->
  // focus 业务 
  // vue 周边生态就起来了
  // app 对象 use 方法
  .use(router)    // 插上路由(插件)
  .mount('#app')  // ->挂载点