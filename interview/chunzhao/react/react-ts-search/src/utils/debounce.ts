export function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout; // 存储 setTimeout 返回值
  return function (...args: any[]) {
    var context = this;
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait);
  }
}