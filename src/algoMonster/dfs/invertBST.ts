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

export function invertBST(root: TreeNode | undefined): TreeNode {
  if (!root) return root

  return new TreeNode(root.val, invertBST(root.right), invertBST(root.left))
}
