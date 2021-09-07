/*
Hi, here's your problem today. This problem was recently asked by LinkedIn:

Given a binary tree, find the minimum depth of the binary tree.
The minimum depth is the shortest distance from the root to a leaf.
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function minimumDepthBST(root: BinaryTreeNode): number {
  if (!root) {
    return 0;
  }

  return Math.min(minimumDepthBST(root.left), minimumDepthBST(root.right)) + 1;
}
