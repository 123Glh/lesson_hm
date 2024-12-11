class TreeDode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}
const root = new TreeDode('A')
root.left = new TreeDode('B')
root.right = new TreeDode('C')
root.left.left = new TreeDode('D')
root.left.right = new TreeDode('E')
root.right.right = new TreeDode('F')

//console.log(root)
function levelOrder(root) {
  // 空树
  if (!root) return []
  const result = []
  //根节点入队
  // 借助队列 先进先出 FIFO 栈 LIFO
  const queue = [root]
  while (queue.length) {
    // 出队
    const current = queue.shift()
    result.push(current.val)
    if (current.left) {
      queue.push(current.left)
    }
    if (current.right) {
      queue.push(current.right)
    }
  }
  return result
}
console.log(levelOrder(root))