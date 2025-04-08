# 性能优化

- 渲染方面有没有考虑性能优化
  - 重绘重排
    - 重绘？
      当元素的样式改变时，浏览器重新绘制元素的过程
      如：改变颜色、背景色、边框等属性
    - 重排？
      当元素的尺寸、位置、布局等属性改变时，浏览器重新计算布局，影响到其他元素的位置和大小过程
      如：改变宽高、添加或删除元素、改变元素的位置等

      重排必定导致重绘，重绘不一定导致重排。

- bad work
  - 批量修改DOM
    切换类名或 cssText 代替流程化一句句写
    - 文档碎片
      document.createDocumentFragment()
    - 脱离文档流进行操作
      先脱离 ()
    - 缓存布局信息
    - 使用 transform 代替位置调整

## 资源加载优化
   - 图片懒加载
     getBoundingClientRect() // 元素相对于视口的位置
     IntersectionObserver // 监听元素是否进入视口
    - 路由懒加载
      () => import('./xxx')
      代码分割(code splitting) 懒加载的代码独立文件
    - 资源预加载 preload/prefetch
      预解析DNS
      <link rel="preload" href="xxx.js">
    - 静态资源使用内容分发网络 CDN

## JS 执行优化
  - 防抖节流
  - web worker ? 提升计算性能 html5 新特性
  - requestAnimationFrame
  - requestIdleCallback react fiber 机制

## 框架层面的优化
  - keep-alive 缓存组件
  - react useMemo memo useCallback 手动
  - key 优化列表渲染

## 缓存策略
  - localStorage sessionStorage cookie
  - 文件缓存 强缓存 和 协商缓存

## 网络优化
  - CDN 加速
  - Gzip 压缩
  - HTTP/2 多路复用 大文件上传 支持新版协议
  - DNS 预解析

## 首屏优化
  - SSR
  - 骨架屏
  - 首屏数据预加载 http2.0 serrver push

## 监控和分析
  - performance 性能
    减少首屏 JS/CSS 体积
  - LightHouse 性能