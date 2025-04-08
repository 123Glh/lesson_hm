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

## 总结
   样式隔离 在单组件文件中实现样式隔离，避免全局样式污染。
   主要通过属性选择器和动态类名来实现的(加点随机数，也叫hash串)。
   vue 中 scoped 当然也支持module，还支持 >>> deep 支持嵌套样式隔离。
   react 通过引入 module.css 来实现样式隔离。
         其中css in js 的 styled-components 也支持样式隔离。
         并带来了组件化的创意。

  - 动画特性
    支持 css 属性改变的过度动画 transition
    支持 @keyframes 关键帧动画
    支持 animation 动画
    transistion 简单， animation 复杂但动画可控性强
  - 变基属性transform
    translate 移动 
    roate 旋转 
    scale 缩放
    也支持3D变形 比如translate(x,y,z) 移动 GPU 加速
  - 渐变 和 @font-face 图标字体库 减少http请求，优化网页性能
  - 布局方案
    flex 弹性布局
    grid 网格布局
    它们很好的支持了移动端的适配
  - 自适应
    @media 媒体查询 calc 计算属性
  - border-radius box-shadow text-shadow background-size
        圆角          阴影      文字阴影       背景尺寸
  - filter 带来滤镜效果
  - rgba 透明度的背景
  - 属性选择器 伪类选择器 伪元素选择器
  - backface-visibility 3d 切换
特别 少 深入 面试官对我们有印象