/*
Hi, here's your problem today. This problem was recently asked by Twitter:

Given a binary search tree (BST) and a value s, split the BST into 2 trees,
where one tree has all values less than or equal to s, and the other tree has all values greater
than s while maintaining the tree structure of the original BST.
You can assume that s will be one of the node's value in the BST.
Return both tree's root node as a tuple.

# How the tree looks like
#     3
#   /   \
#  1     4
#   \     \
#    2     5

print(split_bst(root, 2))
# Split into two trees
# 1    And   3
#  \          \
#   2          4
#               \
#                5
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function splitTree(
  root: BinaryTreeNode,
  target: number
): BinaryTreeNode[] {
  if (!root) {
    return [];
  }

  if (target < root.data) {
    const left = splitTree(root.left, target);
    root.left = left[1];
    return [left[0], root];
  } else {
    const right = splitTree(root.right, target);
    root.right = right[0];
    return [root, right[1]];
  }
}
