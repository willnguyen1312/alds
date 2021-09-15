/*
Given a binary search tree, return the minimum difference between any two nodes in the tree.

Ex: Given the following tree...
        2
       / \
      3   1
return 1.
Ex: Given the following tree...
        29
       /  \
     17   50
    /     / \
   1    42  59
return 8.
Ex: Given the following tree...
        2
         \
         100
return 98.
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function minDifferenceBST(root: BinaryTreeNode): number {
  let result: number = Number.MAX_VALUE;
  let prev: BinaryTreeNode;

  function inorder(curr: BinaryTreeNode) {
    if (!curr) return;

    inorder(curr.left);

    if (prev) {
      result = Math.min(curr.data - prev.data, result);
    }
    prev = curr;

    inorder(curr.right);
  }

  inorder(root);
  return result;
}
