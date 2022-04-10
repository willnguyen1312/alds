// A binary search tree is a binary tree with the property that
// any of its node's value is greater than or equal to any node in its left subtree
// and less than or equal to any node's value in its right subtree.

// Given a binary tree, determine whether it is a binary search tree.

export class TreeNode {
  val: number;
  left?: TreeNode;
  right?: TreeNode;

  constructor(val: number, left?: TreeNode, right?: TreeNode) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function checkValidBSTIter(root: TreeNode | undefined): boolean {
  if (!root) return true;
  let stack: TreeNode[] = [];
  let prev: number = Number.MIN_VALUE;

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.val <= prev) return false;
    prev = root.val;
    root = root.right;
  }

  return true;
}

export function checkValidBSTIterRecur(root: TreeNode) {
  function dfs(
    root: TreeNode | undefined,
    min_val: number,
    max_val: number
  ): boolean {
    if (!root) return true;

    if (min_val > root.val || root.val > max_val) return false;

    return (
      dfs(root.left, min_val, root.val) && dfs(root.right, root.val, max_val)
    );
  }
  return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}
