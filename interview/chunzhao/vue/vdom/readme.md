# 虚拟 DOM? Virtual DOM?

- 虚拟 DOM 是 **真实DOM** 在内存中的轻量级的副本。
  - 内存之中的对象 (描述真实DOM)
  - 新 | 旧 虚拟 DOM diff patches
  - 一次性作用到 DOM 更新中

- 以下 DOM 片段的虚拟 DOM 对象是？
  - 虚拟 DOM 非常方便表达真实 DOM
  - type,props,children([]) + 递归(树)
  - 文本节点直接给文字

- 什么时候生成虚拟 DOM？
  template 编译 -> 生成VNode -> rander -> 生成真实DOM
  响应式 update 数据状态改变 -> 没有虚拟DOM -> 重新生成DOM -> 整个替换(重绘，重排太大了)
  虚拟DOM 生成新的 Virtual Node 内存中， 内存中比较新旧两颗VNode
  针对性 一次性收集所有的 修改 patches 打包给 DOM 一次性更新

-> v-for key?
   增 删 改 移动
   ABCD -> DABC
- Vue 中 h 函数用于创建虚拟 DOM 节点,接收标签名，属性，子节点等参数

## diff 算法
两颗新旧虚拟DOM树
patches 补丁[]

时间复杂度 O(n)

- 暴力
  - 每个 VNode 都去对比O(n)
  - 每个 VNode 的属性都去比较O(n)
  - 每个 VNode 的子节点都去比较O(n)
  O(n^3)
  
- 只做**同层**比较 O(n) ->O(1)
- **type** 变了 就不再比较子节点 O(n) -> O(1)
  div       div
    ul        span 一个节点都没有
      li
      li
- 属性的比较 O(n)
O(n^3) -> O(n)

- 解决所有问题？
  ABCD -> EABCD ?
  A E type 不一样
  不能判断 类型 ， 如果有唯一的 key 来判断
  列表里有移动操作

  key ? O(n) 循环

- 新的 vnode 数组中记录的顺序就是目标的的顺序。所以把对应的节点按照新 vnode 数组的顺序来移动就好。

EABCD(新)                ->            ABCDE(旧)
i = 0 j=0 lastIndex = 0 
E: i=0                                  j = 4 lastIndex = 4
A: i=1                                  j = 0 lastIndex = 0 移动
B: i=2                                  j = 1 lastIndex = 1
C: i=3                                  j = 2 lastIndex = 2
D: i=4                                  j = 3 lastIndex = 3
