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

export function maxDepthOfBinaryTree(root?: TreeNode): number {
  if (!root) {
    return 0;
  }

  const leftDepth = maxDepthOfBinaryTree(root.left);
  const rightDepth = maxDepthOfBinaryTree(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}
