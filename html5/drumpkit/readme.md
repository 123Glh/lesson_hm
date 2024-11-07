# html5 代码敲击乐

## 前端是代码界的导演

## 编写静态页面
- 先写html结构，再写样式
- 职责分离
  link
- html 是演员
 - 盒子
   div
   html 标签
   span 内容
 - 结构

- css 是化妆师
  .keys 类名选择器
  > 子元素选择器
  .keys>.key {
  }
  + 相邻兄弟选择器
- 开发效率是第一位的
  - emmet 快捷输入
  .keys>.key>div+span.sound

- 现有个毛坯房(结构)，需要装修(样式)，需要入住(内容)

- html 标签分为两类
  - 块级元素 默认占据一整行 从上到下
    div
    p
    h1~h6
    ul
    ol
    dl
    table
  - 行内元素 默认占据一行的一部分 从左到右 列
    span
    a
    img
    input
    select
    textarea
    button
    label
    iframe
    video
    audio
  - display:flex
    启动一个弹性布局，子元素在一起

  - 盒模型
    border 边框
    padding 内边距
    content 内容

    外部 margin 