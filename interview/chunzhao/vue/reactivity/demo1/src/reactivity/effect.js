let activeEffect = null; // 当前effect
const targetMap = new WeakMap();  // 弱引用 依赖收集 ？ 当前对象的依赖
// 闭包
export function effect(fn) {
  // 返回一个函数
  // 立即执行一次
  // console.log(fn, '////');
  const effectFn = () => {
    try {
      activeEffect = effectFn; // 保存当前的effect
      return fn();   // 依赖得以收集
    } finally {
      activeEffect = null;// 清除
    }
  }
  effectFn();// 立即执行一次
  return effectFn;// 返回函数
}

export function track(target, type, key) {// 收集依赖
  // console.log('触发 track -> target type(get|{{}}|onMount)');
  // console.log(activeEffect);
  // 一个对象只有一次依赖作为key
  let depsMap = targetMap.get(target);
  // console.log(depsMap, '???');
  if (!depsMap) {
    depsMap = new Map();// hashMap 键值对
    targetMap.set(target, depsMap);
    // targetMap.set(target, (depsMap = new Map()));
  }
  // console.log(depsMap, '???');
  let deps = depsMap.get(key);
  if (!deps) {
    deps = new Set();// 不要重复添加
    // depsMap.set(key, deps);
  }
  if (activeEffect && !deps.has(activeEffect)) {
    deps.add(activeEffect);
  }
  depsMap.set(key, deps);
}

export function trigger(target, type, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  const deps = depsMap.get(key);
  if (!deps) {
    return;
  }
  deps.forEach(effect => {
    effect();
  })
  // console.log(111111);

}