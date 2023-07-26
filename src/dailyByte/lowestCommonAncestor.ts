/*
Given a binary search tree that contains unique values and two nodes within the tree, a, and b,
return their lowest common ancestor. 
Note: the lowest common ancestor of two nodes is the deepest node within the tree such that
both nodes are descendants of it.

Ex: Given the following tree...
       7
      / \
    2    9
   / \ 
  1   5 
and a = 1, b = 9, return a reference to the node containing 7.
Ex: Given the following tree...

        8
       / \
      3   9
     / \ 
    2   6
and a = 2, b = 6, return a reference to the node containing 3.
Ex: Given the following tree...

        8
       / \
      6   9
and a = 6, b = 8, return a reference to the node containing 8
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
  ) {}
}

export function lowestCommonAncestor(
  root: BinaryTreeNode,
  first: BinaryTreeNode,
  second: BinaryTreeNode,
): BinaryTreeNode {
  if (!root) {
    return root
  }

  if (root === first || root === second) {
    return root
  }

  const left = lowestCommonAncestor(root.left, first, second)
  const right = lowestCommonAncestor(root.right, first, second)

  if (left && right) {
    return root
  }

  return left || right
}
