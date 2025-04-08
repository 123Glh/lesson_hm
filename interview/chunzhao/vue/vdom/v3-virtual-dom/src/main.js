import {
  createApp,
  h // 创建虚拟dom节点
} from 'vue'
// 虚拟dom是现代前端库昂加的核心概念之一。
// 它一个轻量级的JavaScript对象，用于描述真实DOM的结构和属性。
const vnode = h('div', { id: 'app' }, 'Hello Vue3')

createApp({
  render() {
    return vnode;
  }
}).mount('#app')