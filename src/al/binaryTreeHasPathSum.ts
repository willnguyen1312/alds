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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false;

  let nodes: any = [];
  let values: any = [];

  nodes.push(root);
  values.push(root.val);

  while (nodes[0]) {
    let curr = nodes.pop();
    let sumValue = values.pop();

    if (curr.left === null && curr.right === null && sumValue === targetSum) {
      return true;
    }

    if (curr.left !== null) {
      nodes.push(curr.left);
      values.push(sumValue + curr.left.val);
    }

    if (curr.right !== null) {
      nodes.push(curr.right);
      values.push(sumValue + curr.right.val);
    }
  }

  return false;
}

function hasPathSumRecur(root: TreeNode, sum: number): boolean {
  if (root === null) return false;
  if (root.val === sum && root.left === null && root.right === null)
    return true;

  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
}
