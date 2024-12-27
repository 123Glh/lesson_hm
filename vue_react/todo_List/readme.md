# vue 哲学

- 前端 刀耕火种 的年代   前端的原始社会
  - 开发思想
    底层API DOM编程 + 事件机制
    缺点： 复杂
    性能差 (频繁访问，修改DOM)
    V8引擎(js+单线程) + 渲染引擎(html + css)
    以快速显示页面为第一要务 html + css 渲染引擎 独立于JS引擎(V8引擎)
    V8 -- 渲染引擎 ， 犹如上了高速，较远

    vue (登记) 批量收集DOM更新， 减少没必要的跑路

- jquery  "封建"社会
  js 框架，DOM 操作简单
  $ 等 封装简化了 js 开发 (开发者)

- web1.0 (csdn bolg) -> web2.0(twitter,facebook)
  JS 代码量增大，性能排在第一位


- 演变到 VUE / REACT 现代前端框架   当代社会
  更关注于业务开发 (数据，响应式)， 不用在意JS DOM底层，框架封装了

  数据思维 + vue/react 实现方式  =  前端开发

- data title
- vue 提供给专注业务的语法 v-model 双相绑定
  - data title input.value  使用
  - 同时 input 输入后 data 里面的 title 也会更新

- todos 应用
  - todos 数据项
  - title  任务
  - @keydown.enter  @event vue 事件监听
    .enter 事件修饰符  事件业务更快
  - 动态样式业务
    : 动态绑定  v-bind  缩写
    :class="{}" 双引号内部是JS 运行区域
     {done: todo.done}