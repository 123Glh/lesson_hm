# 样式隔离
是指在**组件**开发中，确保每个组件的样式的样式不会影响到其他组件的样式。避免全局样式污染。

- vue 中的样式隔离
  单文件组件(SFC) scoped
  实现的原理 属性选择器
  给组件的css上添加一个唯一的属性(data-v-hash值)，通过属性选择器来实现的。
  ```vue
  <div class="example" data-v-f3f3eg9>
  </div>
  .example[data-v-f3f3eg9] {
    color: red; 
  }
  ```
  - vue 中可以通过 >>> 来实现**嵌套样式隔离**
  - vue 也支持 css module
    原理：带有随机数的类名
- react module css
  style.module.css
  - style component