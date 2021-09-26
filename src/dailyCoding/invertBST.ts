/*
This problem was asked by Google.

Invert a binary tree.

For example, given the following tree:

    a
   / \
  b   c
 / \  /
d   e f
should become:

  a
 / \
 c  b
 \  / \
  f e  d
*/

export class BinaryTreeNode {
  constructor(
    public data: string,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function invertBST(root: BinaryTreeNode): BinaryTreeNode {
  if (!root) return;

  invertBST(root.left);
  invertBST(root.right);

  [root.left, root.right] = [root.right, root.left];
  return root;
}
