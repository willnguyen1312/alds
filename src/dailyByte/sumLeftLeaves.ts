/*
Given a binary tree, return the sum of all left leaves of the tree.
Ex: Given the following tree…

    5
   / \
  2   12
     /  \
    3    8
return 5 (i.e. 2 + 3)
Ex: Given the following tree…

       2
      / \
    4    2
   / \ 
  3   9 
return 3
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
  ) {}
}

export function sumLeftLeaves(node: BinaryTreeNode): number {
  let result = 0
  if (!node) {
    return result
  }

  if (node.left && !node.left.left) {
    result = node.left.data
  }

  return result + sumLeftLeaves(node.left) + sumLeftLeaves(node.right)
}
