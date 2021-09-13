/*
This problem was asked by Dropbox.

Given the root to a binary search tree, find the second largest node in the tree.
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function secondLargestNodeBST(root: BinaryTreeNode) {
  let currentMax = Number.MIN_VALUE;
  let secondMax = Number.MIN_VALUE;
  const queue: BinaryTreeNode[] = [root];

  while (queue.length) {
    const node = queue.shift();
    if (node.data > currentMax) {
      secondMax = currentMax;
      currentMax = node.data;
    }

    if (node.data > secondMax && node.data < currentMax) {
      secondMax = node.data;
    }

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return secondMax;
}
