/*
Hi, here's your problem today. This problem was recently asked by Facebook:

You are given the root of a binary tree. Find the path between 2 nodes
that maximizes the sum of all the nodes in the path, and return the sum.
The path does not necessarily need to go through the root.

# (* denotes the max path)
#       *10
#       /  \
#     *2   *10
#     / \     \
#   *20  1    -25
#             /  \
#            3    4
Result 42
*/

export class BinaryTreeNode {
  val: number
  left: BinaryTreeNode | null
  right: BinaryTreeNode | null

  constructor(val: number) {
    this.val = val
  }
}

export function getMaxPathSum(tree: BinaryTreeNode) {
  const [_, maxSum] = [...findMaxSum(tree)]
  return maxSum
}

export function findMaxSum(tree: BinaryTreeNode) {
  if (!tree) return [0, 0]

  const [leftMaxSumAsSideBranch, leftMaxPathSum] = findMaxSum(tree.left)
  const [rightMaxSumAsSideBranch, rightMaxPathSum] = findMaxSum(tree.right)
  const maxChildSumAsSideBranch = Math.max(
    leftMaxSumAsSideBranch,
    rightMaxSumAsSideBranch,
  )

  const { val } = tree
  const maxSumAsSideBranch = Math.max(maxChildSumAsSideBranch + val, val)
  const maxSumAsRootNode = Math.max(
    leftMaxSumAsSideBranch + val + rightMaxSumAsSideBranch,
    maxSumAsSideBranch,
  )

  const maxPathSum = Math.max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode)

  return [maxSumAsSideBranch, maxPathSum]
}
