function throttle(func, wait) {
  let context, args;
  let previous = 0;
  return function () {
    // 获取当前时间戳
    const now = +new Date();
    context = this;
    args = arguments;
    // 判断是否超过节流时间间隔
    if (now - previous > wait) {
      // 执行目标函数
      func.apply(context, args);
      // 更新上一次执行的时间戳
      previous = now;
    }
  };
}