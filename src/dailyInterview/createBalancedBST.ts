/*
Hi, here's your problem today. This problem was recently asked by LinkedIn:

Given a sorted list of numbers, change it into a balanced binary search tree.
You can assume there will be no duplicate numbers in the list.
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function createBalancedBST(
  numbs: number[],
  left = 0,
  right = numbs.length - 1
): BinaryTreeNode {
  if (left > right) {
    return null;
  }

  const middle = Math.floor((left + right) / 2);
  const result = new BinaryTreeNode(numbs[middle]);

  result.left = createBalancedBST(numbs, left, middle - 1);
  result.right = createBalancedBST(numbs, middle + 1, right);

  return result;
}
