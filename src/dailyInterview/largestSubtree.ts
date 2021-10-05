/*
This problem was asked by Apple.

Given a tree, find the largest tree/subtree that is a BST.

Given a tree, return the size of the largest tree/subtree that is a BST.
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function largestSubtree(root: BinaryTreeNode): [number, BinaryTreeNode] {
  function largestSubtreeHelper(
    node: BinaryTreeNode
  ): [number, BinaryTreeNode, 'left' | 'right' | ''] {
    if (!node) {
      return [0, null, ''];
    }

    if (!node.left && !node.right) {
      return [1, node, ''];
    }

    const left = largestSubtreeHelper(node.left);
    const right = largestSubtreeHelper(node.right);

    return left[0] > right[0]
      ? [left[0] + 1, node.left, 'left']
      : [right[0] + 1, node.right, 'right'];
  }

  const [size, bigSubTree, direction] = largestSubtreeHelper(root);

  const another = direction === 'left' ? 'right' : 'left';

  root[another] = null;
  root[direction] = bigSubTree;

  return [size + 1, root];
}
