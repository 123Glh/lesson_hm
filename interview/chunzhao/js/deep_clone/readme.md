# 深拷贝和浅拷贝

- 深拷贝和浅拷贝的区别：
  - 简单 数据类型 拷贝 值
  - 复杂 数据类型 拷贝 引用 (浅)
  - 复杂 数据类型 开辟新的空间 拷贝值 (深)

- JSON.parse(JSON.stringify(obj)) // 简单粗暴
  - 函数 undefined Symbol 无法拷贝
  - 循环引用的对象无法拷贝

- 手写深拷贝
  - 遍历 for(key in) forEach
  - 递归
  - 循环引用 map (key 对象)
  - 更加复杂类型