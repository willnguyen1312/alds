/*
Hi, here's your problem today. This problem was recently asked by Uber:

Given a binary tree, and a target number, find if there is a path
from the root to any leaf that sums up to the target.
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
  ) {}
}

export function targetSumFromRootToLeaf(
  root: BinaryTreeNode,
  target: number,
): boolean {
  if (!root) {
    return false
  }

  if (root.data === target && !root.left && !root.right) {
    return true
  }

  return (
    targetSumFromRootToLeaf(root.left, target - root.data) ||
    targetSumFromRootToLeaf(root.right, target - root.data)
  )
}
