function invertBinaryTree(tree: TreeNode) {
  const queue = [tree]

  while (queue.length) {
    const current = queue.shift()
    if (!current) continue

    swapLeftAndRight(current)
    current.left && queue.push(current.left)
    current.right && queue.push(current.right)
  }
}

function invertBinaryTreeRecur(tree: TreeNode) {
  swapLeftAndRight(tree)
  tree.left && invertBinaryTreeRecur(tree.left)
  tree.right && invertBinaryTreeRecur(tree.right)
}

function swapLeftAndRight(tree: TreeNode) {
  const left = tree.left
  tree.left = tree.right
  tree.right = left
}
