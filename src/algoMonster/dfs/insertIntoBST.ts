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

export function insertIntoBST(root: TreeNode, value: number) {
  if (!root) return new TreeNode(value);

  if (value < root.val) {
    root.left = insertIntoBST(root.left, value);
  } else {
    root.right = insertIntoBST(root.right, value);
  }

  return root;
}
