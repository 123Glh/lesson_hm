const options = {
  root: null, // 默认为视窗
  rootMargin: '0px', // 在计算交叉度时，扩大或缩小root的边界
  threshold: 0.1 // 当目标元素10%的部分进入视窗时触发回调
};
// export function useIntersectionObserver;

// 外界调用
// 单例模式 整个应用都使用同一个观察器实例
const observer = createIntersectionObserver();

// 导出观察器实例方法
export function useIntersectionObserver() {
  return {
    observer,
  };
}
function createIntersectionObserver() {
  // 创建一个观察器实例
  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
      if (entry.isIntersecting) {   // 当目标元素进入视窗时
        loadImage(entry.target as HTMLImageElement);  // 加载图片
        observer.unobserve(entry.target); // 加载后取消观察
        // console.log("观察完毕");
      }
    });
  }, options);
  return observer;
}
// 加载图片
function loadImage(targetImage: HTMLImageElement) {
  targetImage.src = targetImage.dataset?.src || "";
}