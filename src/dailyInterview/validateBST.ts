/*
Hi, here's your problem today. This problem was recently asked by Facebook:

You are given the root of a binary search tree.
Return true if it is a valid binary search tree, and false otherwise.
Recall that a binary search tree has the property that all values in the left subtree are less than or equal
to the root, and all values in the right subtree are greater than or equal to the root.
*/

export class BinaryTreeNode {
  val: number;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;

  constructor(val: number) {
    this.val = val;
  }
}

export function validateBST(root: BinaryTreeNode | null): boolean {
  if (!root) {
    return true;
  }

  if (root.left?.val > root.val || root.right?.val < root.val) {
    return false;
  }

  const isValidLeft = validateBST(root.left);
  const isValidRight = validateBST(root.right);

  return isValidLeft && isValidRight;
}
