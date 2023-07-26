/*
Hi, here's your problem today. This problem was recently asked by Amazon:

A number can be constructed by a path from the root to a leaf.
Given a binary tree, sum all the numbers that can be constructed from the root to all leaves.

#      1
#    /   \
#   2     3
#  / \
# 4   5

print(bst_numbers_sum(n1))
# 262
# Explanation: 124 + 125 + 13 = 262
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
  ) {}
}

export function rootToLeaveSum(root: BinaryTreeNode): number {
  let result = 0

  function dfs(node: BinaryTreeNode, currentSum: string = "") {
    if (!node) {
      return
    }

    if (!node.left && !node.right) {
      result += +(currentSum + node.data.toString())
    }

    dfs(node.left, currentSum + node.data)

    dfs(node.right, currentSum + node.data)
  }

  dfs(root)

  return result
}
