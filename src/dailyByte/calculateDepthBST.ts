/*
Given a binary tree, return its maximum depth. 
Note: the maximum depth is defined as the number of nodes
along the longest path from root node to leaf node. 

Ex: Given the following tree…

    9
   / \
  1   2
return 2
Ex: Given the following tree…

    5
   / \
  1  29
    /  \
   4   13
return 3
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
  ) {}
}

export function calculateDepthBST(root: BinaryTreeNode) {
  if (!root) {
    return 0
  }

  return (
    Math.max(calculateDepthBST(root.left), calculateDepthBST(root.right)) + 1
  )
}
