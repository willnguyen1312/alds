/*
This question is asked by Facebook.

Given the root of a binary tree and two values low and high
return the sum of all values in the tree that are within low and high. 

Ex: Given the following tree where low = 3 and high = 5…

        1
       / \
      7   5
    /    / \
   4    3   9
return 12 (3, 4, and 5 are the only values within low and high and they sum to 12)
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function sumWithinBounds(
  root: BinaryTreeNode,
  low: number,
  high: number
): number {
  const collectedNumbers: number[] = [];

  function collect(node: BinaryTreeNode) {
    if (node.data >= low && node.data <= high) {
      collectedNumbers.push(node.data);
    }

    if (node.left) {
      collect(node.left);
    }

    if (node.right) {
      collect(node.right);
    }
  }

  collect(root);

  return collectedNumbers.reduce((acc, cur) => acc + cur);
}
