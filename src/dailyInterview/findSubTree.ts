/*

Hi, here's your problem today. This problem was recently asked by Apple:

Given 2 binary trees t and s, find if s has an equal subtree in t,
where the structure and the values are the same.
Return True if it exists, otherwise return False.

"""
Tree t:
    1
   / \
  4   5 
 / \ / \
3  2 4 -1

Tree s:
  4 
 / \
3  2 
"""

print(find_subtree(s, t))
# True
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function findSubTree(
  first: BinaryTreeNode,
  second: BinaryTreeNode
): boolean {
  function findInTree(node: BinaryTreeNode, target: number): BinaryTreeNode {
    if (!node) {
      return null;
    }

    if (node.data === target) {
      return node;
    }

    return findInTree(node.left, target) || findInTree(node.right, target);
  }

  const foundInSecond = findInTree(second, first.data);

  if (!foundInSecond) {
    return false;
  }

  function checkTreesEqual(
    first: BinaryTreeNode,
    second: BinaryTreeNode
  ): boolean {
    if (!first && !second) {
      return true;
    }

    if (first.data !== second.data) {
      return false;
    }

    return (
      checkTreesEqual(first.left, second.left) &&
      checkTreesEqual(first.right, second.right)
    );
  }

  return checkTreesEqual(first, foundInSecond);
}
