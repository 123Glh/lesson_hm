# vue 全家桶 之 vue-router 路由

- vue 语法 组件(vue2 选项式 / vue3 组合式 大型项目 200行)、响应式、生命周期、指令 (v-bind:、v-model、v-for、v-if(show)、三种数据(自有数据ref、props、计算属性computed))
  只做最核心的
- vue-router 路由 vue 周边生态
  - 跳转到其他页面 路由 
  - 
- vuex/pinia 状态管理

## vue-router
- 将接管路由，像交警一样
- router-link 取代a标签
  a 标签
  router-link 组件包含 a 的功能 ， 路由对应的组件显示到相应的位置
  要启用，
  组件没有生效，无法识别的组件 -> div 元素
  - 向vue 添加vue-router

- router 有专门的目录
  - index.js 入口配置文件
  - router-link 是 vue-router 提供的组件， user(router) 不用引入就可以生效