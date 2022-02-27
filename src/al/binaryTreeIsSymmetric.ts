/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true;
  return checkSymmetric(root.left, root.right);
}

function checkSymmetric(l: any, r: any) {
  if (l === null && r === null) {
    return true;
  } else if (r === null || l === null) {
    return false;
  }

  if (l.val !== r.val) return false;

  if (!checkSymmetric(l.left, r.right)) return false;
  if (!checkSymmetric(l.right, r.left)) return false;

  return true;
}
