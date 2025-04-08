function inverTree(root) {
  if (root === null) return null;
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  inverTree(root.left);
  inverTree(root.right);
  return root;
}