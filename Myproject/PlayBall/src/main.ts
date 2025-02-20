import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import './assets/main.css'
import router from './router/index'
import '@/assets/icon.css'
import { Toast } from 'vant';
const app = createApp(App)
app.use(createPinia())
app.use(Toast)
app.use(router)
app.mount('#app')