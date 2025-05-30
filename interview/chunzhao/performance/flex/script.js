function measureRenderTime() {
  // 性能优化API
  const startTime = performance.now(); // 计算开始时间
  // 主线程 idle 微任务？
  const firstElement = document.querySelector(".flex-item");

  const checkFirstRendered = setInterval(() => {
    // firstElement 已经渲染了？ style api 能拿到 
    // offsetTop offsetWidth
    if (firstElement.offsetHeigt > 0 && firstElement.offsetWidth > 0) {
      clearInterval(checkFirstRendered);
      const firstRenderTime = performance.now() - startTime;
      console.log(`首屏渲染时间：${firstRenderTime}ms`);

    }
  }, 50)
}

measureRenderTime(); // 调用函数