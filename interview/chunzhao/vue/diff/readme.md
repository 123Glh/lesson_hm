# diff 算法

old:ABCDE -> new:EABCD

- 处理  新的 VDOM 第一个节点 E
  在 old 找到 E ，位置为 4
  patch 更新
  lastIndex = 4
  ABCDE

- A
  i = 1
  j = 0
  j < lastIndex
  虚拟 DOM el 指向真实dom
  E.el -> nextSibling
  BCDEA

- B
  i = 2
  j = 0
  j < lastIndex
  E.el -> nextSibling
  CDEAB

- C
  i = 3
  j = 0
  j < lastIndex
  E.el -> nextSibling
  DEABC

- D
  i = 4
  j = 0
  j < lastIndex
  E.el -> nextSibling
  EABCD

移动次数太多 如何解决？
双端比较