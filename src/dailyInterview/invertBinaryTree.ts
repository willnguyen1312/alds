/*
Hi, here's your problem today. This problem was recently asked by Twitter:

You are given the root of a binary tree. Invert the binary tree in place. That is, all left children should become right children, and all right children should become left children.

Example:

    a
   / \
  b   c
 / \  /
d   e f

The inverted version of this tree is as follows:

  a
 / \
 c  b
 \  / \
  f e  d

*/

export class BinaryTreeNode {
  val: string;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;

  constructor(val: string) {
    this.val = val;
  }
}

export function invertBinaryTree(
  binaryTree: BinaryTreeNode | null | undefined
) {
  if (!binaryTree) return;

  invertBinaryTree(binaryTree.left);
  invertBinaryTree(binaryTree.right);

  [binaryTree.left, binaryTree.right] = [binaryTree.right, binaryTree.left];
  return binaryTree;
}
