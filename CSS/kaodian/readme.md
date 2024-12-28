## 层叠上下文

# 页面渲染规则

- 文档流
  body  开始从上到下，从左到右

- 布局 Layout

- 盒模型 盒子(本身)大小
  box-sizing: border + padding + content
  盒模型  标准盒模型： content-box  =  content                         width 和 height 是 content 大小
          ie盒模型 ： border-box   =  content + padding + border      width 和 height 是 border + padding + content 大小

- 认标签，但也可以转变  display
  块级元素  block
  行内元素  inline 不用于做盒子 不能设置宽高，宽高是由内容决定的
  块级元素为何默认宽度 100%？
  - html 是第一个BFS 元素，body 参与html的BFC
    页面显示由html负责  页面的布局 块级元素从上到下，行内元素从左到右
    

- display

- BFC  block Formatting Context 块级格式化上下文
  - html 是根元素，也是最顶级的BFC
  - context 块级元素从上到下，行内元素从左到右

- 格式上下文？ Formatting Context  我跟着谁混
  - 为何弹性布局 打破了html BFC 的规则
    - BFC 不是某个元素的特例，弹性布局，创立了一个新的 BFC
    - BFC 不受外界影响， 全新的独立渲染区域 FFC  Flex Formatting Context
      flex-direction:row|column
  
  - GFC 网格布局 Grid Formatting Context
    

# BFC
- 独立的渲染区域，不受外界影响
- html 是最顶级的BFC
- block level box , 一个接一个的放置，且宽度100%
- 盒子垂直方向的距离由margin 决定，同一个BFC 的相邻盒子盒子的margin 会发生重叠，大的说了算
- 每个元素的margin 左边 ， 与包含块 border 的左边相接触，即使存在浮动也一样
- BFC 区域不会与float box 重叠
- 独立渲染区域，不受外界影响
- 计算BFC的高度   浮动元素也参与计算
  - 计算BFC 所包含的盒子的高度， 就是BFC的高度
  - 计算方式： 找出BFC 中最高的盒子的高度，就是BFC的高度

- 触发新的BFC
  - overflow: hidden|auto...  不为visible   水杯盛开水