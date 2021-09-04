/*

Hi, here's your problem today. This problem was recently asked by LinkedIn:

Given a binary tree, find the most frequent subtree sum. 

Example:

   3
  / \
 1   -3

The above tree has 3 subtrees. The root node with 3, and the 2 leaf nodes,
which gives us a total of 3 subtree sums. The root node has a sum of 1 (3 + 1 + -3), the left leaf node has a sum of 1, and the right leaf node has a sum of -3. Therefore the most frequent subtree sum is 1.

If there is a tie between the most frequent sum, you can return any one of them.
*/

export class BinaryTreeNode {
  val: number;
  left?: BinaryTreeNode | null;
  right?: BinaryTreeNode | null;

  constructor(val: number) {
    this.val = val;
  }
}

export function mostFrequentSubTreeSum(root: BinaryTreeNode): number {
  let result = 0;
  const cache: Record<number, number> = {};

  function dfsCount(node: BinaryTreeNode) {
    if (!node) {
      return 0;
    }

    const total = node.val + dfsCount(node.left) + dfsCount(node.right);
    cache[total] = cache[total] || 0 + 1;
    result = Math.max(cache[total], result);

    return total;
  }

  dfsCount(root);

  return result;
}
