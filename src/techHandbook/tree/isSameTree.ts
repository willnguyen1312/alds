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
//  https://leetcode.com/problems/same-tree/
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!q || !p) return p === q;

  if (p.val === q.val)
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

  return false;
}
