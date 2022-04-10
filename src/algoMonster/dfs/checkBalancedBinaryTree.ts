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

function getTreeHeight(root: TreeNode | undefined): number {
  if (!root) {
    return 0;
  }

  const leftHeight = getTreeHeight(root.left);
  const rightHeight = getTreeHeight(root.right);

  if (leftHeight === -1 || rightHeight === -1) {
    return -1;
  }

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }

  return Math.max(leftHeight, rightHeight) + 1;
}

export function checkBalancedBinaryTree(root: TreeNode | undefined): boolean {
  return getTreeHeight(root) !== -1;
}
