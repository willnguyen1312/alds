/*
Hi, here's your problem today. This problem was recently asked by Twitter:

Given a binary tree and an integer k, filter the binary tree such that
its leaves don't contain the value k. Here are the rules:

- If a leaf node has a value of k, remove it.
- If a parent node has a value of k, and all of its children are removed, remove it.

Input
#     1
#    / \
#   1   1
#  /   /
# 2   1

Output
#     1
#    /
#   1
#  /
# 2
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function filterBinaryTreeLeaves(
  root: BinaryTreeNode,
  target: number
): BinaryTreeNode {
  if (!root) {
    return null;
  }

  root.left = filterBinaryTreeLeaves(root.left, target);
  root.right = filterBinaryTreeLeaves(root.right, target);

  if (!root.left && !root.right && root.data === target) {
    return null;
  }

  return root;
}
