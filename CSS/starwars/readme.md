# 星球大战

- <!DOCTYPE html>
  html5 版本声明头
- * 
  css通配符，所有元素
  margin 0 padding 0 说有元素初始化一致
  由于有不同的浏览器厂商，默认值不一样，所以要初始化
  需要在页面开始之前，做一个样式resent 让任何浏览器访问我们的页面都是一张白纸 
  在所有浏览器上体验一致 

  *性能不太好，所以我们宁愿列出来所有的标签
- 居中
  - 绝对定位 position: absolute;
    - 百分比相对于父元素
  - transform 变基属性
    - translate 移动
      x 左移 负 右移 正
      y 上移 负 下移 正
  - 背景大法
    盒子在页面中的占位就会显现出来

- css动画
  - animation 动画
  - keyframes 关键帧
  - transform scale translateY
  - 飞船模拟动画，逼真
  - 1% 时间差， 画龙点睛
  - transform-style: preserve-3d; 开启3d效果
    perspective:800px; 视点， 眼睛离屏幕的距离
  
  - inline 元素 不支持transform ,display 属性切换为inline-block 就可以了