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

export function findLowestCommonAncestor(
  root: TreeNode,
  node1: TreeNode,
  node2: TreeNode,
): TreeNode | null {
  if (!root) return null

  if (root === node1 || root === node2) return root

  const left = findLowestCommonAncestor(root.left, node1, node2)
  const right = findLowestCommonAncestor(root.right, node1, node2)

  if (left && right) return root

  if (left) return left
  if (right) return right

  return null
}
