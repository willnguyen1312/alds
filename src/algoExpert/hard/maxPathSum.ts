export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val: number) {
    this.val = val
  }
}

export function maxPathSum(tree: TreeNode) {
  const [_, maxSum] = [...findMaxSum(tree)]
  return maxSum
}

export function findMaxSum(tree: TreeNode | null) {
  if (tree === null) return [0, 0]

  const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left)
  const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right)
  const maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch)

  const { val: value } = tree
  const maxSumAsBranch = Math.max(maxChildSumAsBranch + value, value)
  const maxSumAsRootNode = Math.max(
    leftMaxSumAsBranch + value + rightMaxSumAsBranch,
    maxSumAsBranch,
  )

  const maxPathSum = Math.max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode)

  return [maxSumAsBranch, maxPathSum]
}
