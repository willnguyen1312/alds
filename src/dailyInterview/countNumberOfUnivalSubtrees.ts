/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

A unival tree is a tree where all the nodes have the same value. Given a binary tree, return the number of unival subtrees in the tree.

For example, the following tree should return 5:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

The 5 trees are:
- The three single '1' leaf nodes. (+3)
- The single '0' leaf node. (+1)
- The [1, 1, 1] tree at the bottom. (+1)
*/

export class BinaryTreeNode {
  val: number
  left: BinaryTreeNode | null
  right: BinaryTreeNode | null

  constructor(val: number) {
    this.val = val
  }
}

export function countNumberOfUnivalSubtrees(root: BinaryTreeNode): number {
  let result = 0

  function count(node: BinaryTreeNode) {
    if (!node.left && !node.right) {
      result++
      return true
    }

    if (
      count(node.left) &&
      count(node.right) &&
      node.val === node.left?.val &&
      node.val === node.right?.val
    ) {
      result++
      return true
    }

    return false
  }

  count(root)

  return result
}
