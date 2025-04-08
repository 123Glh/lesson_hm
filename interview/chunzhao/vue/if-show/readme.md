# v-if v-show 区别
场景

1. v-if 是真正的**条件渲染**，切换时会触发事件监听器、本身、子组件的挂载卸载
2. v-if 是惰性的，如果初始条件为假，则什么也不做
3. v-show 简单，初始条件与否都要渲染，基于 css display 切换
4. v-show 适合频繁切换的场景，v-if 条件很少改变

场景举例
- 登录弹窗 v-if
- form 表单的校验 v-show
- 动画效果 v-show + transition
- 用户鉴权显示(user,admin) v-if