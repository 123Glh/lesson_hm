import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import './assets/main.css'
import router from './router/index'
import '@/assets/icon.css'
import { Toast } from 'vant';
import 'wc-waterfall'
import lazy from './directives/lazy.ts'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Toast)
app.directive('lazy', lazy);
app.mount('#app')