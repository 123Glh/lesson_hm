问题：描述一下对vue生命周期的理解：

创建
初始化数据
编译template
挂载Dom
渲染
更新渲染
卸载

beforeCreate：实例创建之初 初始化插件
Created：组件已经创建完成 异步请求的获取 此时dom还没有生成
beforeMount：组件挂载之前
Mounted:组件挂载之后 异步请求的获取 此时dom已经生成 会导致页面发生闪动
beforeUpdate:数据发生变化 更新之前
updated:数据发生变化更新之后
beforeDestory:实例销毁 这个时候date，method等 还是可以使用的
destoryed:销毁后
- keep-alive:
  - activited   组件激活的时候
  - deactived  组件停用
- errorCaptured: 捕获实例的错误

```js
new Vue() const vm = new Vue() // 创建空的实例对象
init events lifecycle
// beforeCreate
init reactivity data  injection methods
// created
options
- yes
-false el option vm.$mount(el) 

template
- yes compiler//编译
- no el outHTML as template  // 先创建一个

// beforeMount 此时已经编译好了 但是页面未更新
vm.$el replace $el
// mounted 在DOM上进行渲染完成
// beforeUpdate
VDOOM re-render patch 虚拟DOM  比较前后的差异 进行更新
// updated 这时页面上的数据已经更新了
// beforeDestory
这时 data methods filter distroyed  都还存在
// destoryed
vm.$el = null
```

<br>

问题：双向数据绑定

单向绑定：model -> view
双向绑定：model -> view  js -> model

三部分：

1. 数据层 model：存储数据及逻辑
2. 视图层 view：展示效果
3. 业务逻辑层： viewModel: 数据 视图

MVVM model view viewModel

数据 视图
1. observer：对所有数据的属性进行监听
2. compiler：更新
3. watcher：订阅者 当数据变化的时候 通知订阅者 去更新视图

```js
new Vue()

1. data Observer 响应式处理
2. template 动态绑定的数据 {{}} -> date 获取 view关联 compiler
3. update watcher
4. date 依赖 -> watcher 触发其副作用 -> update
```

```js
1. new MVVM()
2. Observer：劫持监听所有属性 通知变化 Dep -> Watcher -> 视图更新 updates -> 通知订阅者
3. Compiler: 订阅数据变化 Watcher
```

```js
class Vue{
  constructor(options){
    this.$options = options
    this.$data = options.data
    this.observer(this.$data) //对data进行响应式处理
    proxy(this) // date 数据代理到 vm
    new Compiler(options.el, this)
  }
  function observer(obj){
    if(typeof obj !== 'object'){
      return;
    }
    new Observer(obj)
  }
  class Observer{
    constructor(val){
      this.val = val ;
      this.walk(val)
    }
    walk(obj){
     obj.keys(obj).forEach(key => {
       defineReactive(obj, key, obj[key]) 
     }) 
    }
  }
  class Compiler{
    constructor(el, vm){
      this.$vm = vm 
      this.$el = document.querySelector(el)
      if(this.$el){
        this.compile(this.$el)
      }
    }
  }
}
compile(el){
  const childNodes = el.childNodes;
  Array.from(childNodes).forEach(node => {
    if(this.isElement(node)){
      // compile 编译node节点
      // node.nodeType 1 
    }else if(this.isInterpolation(node){
      // {{a}}
      // compile
    })
    if(node.childNodes && node.childNodes.length){
      this.compile(node)
    }
}) 
}
```

1. defineReactive(obj, key, val)
2. key name1 node watch
3. name1 getter 收集依赖
4. name1 setter 通知依赖更新
5. 订阅者 watcher 收集依赖
6. 发布者 dep 通知订阅者