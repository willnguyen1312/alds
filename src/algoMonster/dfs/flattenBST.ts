export class TreeNode {
  val: number
  left?: TreeNode
  right?: TreeNode

  constructor(val: number, left?: TreeNode, right?: TreeNode) {
    this.val = val
    this.left = left
    this.right = right
  }
}

export function flattenBST(root: TreeNode): TreeNode {
  const stack: TreeNode[] = [root]
  let cur: TreeNode

  while (stack.length) {
    cur = stack.pop()
    if (cur.right) stack.push(cur.right)
    if (cur.left) stack.push(cur.left)
    cur.left = null
    cur.right = stack[stack.length - 1]
  }

  return root
}
