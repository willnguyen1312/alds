/*
Hi, here's your problem today. This problem was recently asked by Google:

Given a binary tree, remove the nodes in which there is only 1 child,
so that the binary tree is a full binary tree.

So leaf nodes with no children should be kept, and nodes with 2 children should be kept as well.

  # Fill this in.

# Given this tree:
#     1
#    / \ 
#   2   3
#  /   / \
# 0   9   4

# We want a tree like:
#     1
#    / \ 
#   0   3
#      / \
#     9   4
*/

export class BinaryTreeNode {
  val: number;
  left: BinaryTreeNode | null = null;
  right: BinaryTreeNode | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

export function fullBinaryTree(node: BinaryTreeNode): BinaryTreeNode {
  if (!node) {
    return null;
  }

  node.left = fullBinaryTree(node.left);
  node.right = fullBinaryTree(node.right);

  if (!node.left && !node.right) {
    return node;
  }

  if (!node.left) {
    return node.right;
  }

  if (!node.right) {
    return node.left;
  }

  return node;
}
