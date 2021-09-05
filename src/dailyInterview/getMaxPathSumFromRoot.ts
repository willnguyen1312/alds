/*
Hi, here's your problem today. This problem was recently asked by Google:

Given a binary tree, find and return the largest path from root to leaf.

Here's an example and some starter code:

#    1
#  /   \
# 3     2
#  \   /
#   5 4

# [1, 3, 5]
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function getMaxPathSumFromRoot(root: BinaryTreeNode): number[] {
  function getMaxPathSumFromRootUtil(node: BinaryTreeNode): [number, number[]] {
    if (!node) {
      return [0, []];
    }

    const [maxLeft, leftPath] = getMaxPathSumFromRootUtil(node.left);
    const [maxRight, rightPath] = getMaxPathSumFromRootUtil(node.right);

    return maxLeft > maxRight
      ? [maxLeft + node.data, [node.data, ...leftPath]]
      : [maxRight + node.data, [node.data, ...rightPath]];
  }

  const [maxLeft, leftPath] = getMaxPathSumFromRootUtil(root.left);
  const [maxRight, rightPath] = getMaxPathSumFromRootUtil(root.right);

  return maxLeft > maxRight
    ? [root.data, ...leftPath]
    : [root.data, ...rightPath];
}
