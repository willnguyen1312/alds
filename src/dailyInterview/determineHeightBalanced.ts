/*
Hi, here's your problem today. This problem was recently asked by Twitter:

Given a tree, find if the binary tree is height balanced or not.
A height balanced binary tree is a tree where every node's 2 subtree
do not differ in height by more than 1.
*/

export class BinaryTreeNode {
  val: number;
  left?: BinaryTreeNode | null;
  right?: BinaryTreeNode | null;

  constructor(val: number, left?: BinaryTreeNode, right?: BinaryTreeNode) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Height {
  val: number = 0;
}

export function determineHeightBalanced(
  root: BinaryTreeNode,
  height = new Height()
): boolean {
  if (!root) {
    return true;
  }

  const leftHeight = new Height();
  const rightHeight = new Height();

  const isLeftBalanced = determineHeightBalanced(root.left, leftHeight);
  const isRightBalanced = determineHeightBalanced(root.right, rightHeight);

  height.val = Math.max(leftHeight.val, rightHeight.val) + 1;

  if (Math.abs(leftHeight.val - rightHeight.val) >= 2) {
    return false;
  }

  return isLeftBalanced && isRightBalanced;
}
