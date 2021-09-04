/*
Hi, here's your problem today. This problem was recently asked by Google:

Given a sorted list, create a height balanced binary search tree,
meaning the height differences of each node can only differ by at most 1.

input = [1, 2, 3, 4, 5, 6, 7, 8]
# 53214768
#  (pre-order traversal)
#       5
#      / \
#     3    7
#    / \  / \
#   2   4 6  8
#  /
# 1
*/

class BinaryTreeNode {
  val: number;
  left?: BinaryTreeNode | null;
  right?: BinaryTreeNode | null;

  constructor(val: number) {
    this.val = val;
  }
}

export function createHeightBalancedBST(
  numbs: number[],
  middle = Math.floor(numbs.length / 2)
): BinaryTreeNode {
  if (numbs.length === 1) {
    return new BinaryTreeNode(numbs[0]);
  }

  if (numbs.length === 0) {
    return null;
  }

  const result = new BinaryTreeNode(numbs[middle]);

  result.left = createHeightBalancedBST(numbs.slice(0, middle));
  result.right = createHeightBalancedBST(numbs.slice(middle + 1));

  return result;
}
