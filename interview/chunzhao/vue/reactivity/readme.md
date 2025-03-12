# vue 响应式

- 响应式的原理
- ref/reactive api
- Proxy vue/react
- Object.defineProperty
- 手写响应式

## vue 架构
- vue runtime 运行 vue 核心代码
- 组件、响应式(MVVM)、虚拟DOM

- 适配各种 UI 程序(网页、小程序、桌面应用、移动端应用)
  平台无关性

- reactive 包装了一个普通对象编程响应式编程对象？

## 响应式机制的主要功能
   可以把普通对象封装成响应式对象，拦截数据的获取和修改操作(proxy get set)，实现依赖数据的自动化更新({{ }} ......)。
   - 专注于业务逻辑
   - 脱离底层的dom 性能提升

   步骤：
   - reactive() 封装普通对象
   - proxy 对象的代理
   - 收集依赖 (effect)

- proxy 比 Object.defineProperty 优势
  - 懒代理
    多级菜单
    默认代理第一层 性能好
    支持深度代理，递归
    defineProperty 性能不好，必须一次性完成深度代理
  - reactive shallowReactive

- ref ?