// 先序遍历
// 递归？
// 函数直接或间接调用自己
//   // - 退出条件   root === null
//   - 递归公式  顶端 自顶向下思考
//   整棵树先序遍历  自己先出来  左子树完成先序遍历 右子树完成先序遍历
function preorder(root) {
  //空树
  //退出条件
  if (!root) {
    return
  }
  // 递归式
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}
const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D'
    },
    right: {
      val: 'E'
    }
  },
  right: {
    val: 'C',
    right: {
      val: 'F'
    }
  }
}
preorder(root)