/*
Given a binary tree of integers,
find the maximum path sum between two nodes.
The path must go through at least one node, and does not need to go through the root.
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function maxSumBetweenTwoBST(root: BinaryTreeNode): number {
  let result = Number.MIN_VALUE;

  function traverse(node: BinaryTreeNode) {
    if (!node) {
      return;
    }

    if (node.left) {
      result = Math.max(result, node.data + node.left.data);
      traverse(node.left);
    }

    if (node.right) {
      result = Math.max(result, node.data + node.right.data);
      traverse(node.right);
    }
  }

  traverse(root);
  return result;
}
