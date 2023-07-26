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

export function countVisibleNodes(
  root: TreeNode | undefined,
  maxSoFar = Number.MIN_VALUE,
): number {
  if (!root) {
    return 0
  }

  let result = 0

  if (root.val >= maxSoFar) {
    result += 1
  }

  result += countVisibleNodes(root.left, Math.max(root.val, maxSoFar))
  result += countVisibleNodes(root.right, Math.max(root.val, maxSoFar))

  return result
}
