// 路由配置
import {
  createRouter,   // 创建路由实例
  createWebHashHistory// 路由模式
} from 'vue-router'//插件

// 页面级别组件放到views文件夹下
import Home from '../views/Home.vue'
import About from '../views/About.vue'
// post 模块 Post文件夹
import PostIndex from '../views/Post/index/post-index.vue'
import PostShow from '../views/Post/show/post-show.vue'
// 路由配置
const routes = [
  {
    path: '/',       // 路由路径
    component: Home  // 页面组件
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts',
    component: PostIndex
  },
  {
    path: '/posts/:postid',   // 动态路由
    component: PostShow
  }
]
// 路由实例
const router = createRouter({   // 创建路由
  history: createWebHashHistory(),  // 路由模式
  routes  // 路由配置数组
})

export default router