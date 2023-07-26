/*
This question is asked by Amazon.

Given two trees s and t return whether or not t is a subtree of s. 
Note: For t to be a subtree of s not only must each node’s value in t match
its corresponding node’s value in s, but t must also exhibit the exact same structure as s.
You may assume both trees s and t exist. 

Ex: Given the following trees s and t…

s = 1
   / \
  3   8
t = 1
     \
      8
return false
Ex: Given the following trees s and t…

s = 7
   / \
  8   3
t = 7
   / \
  8   3
return true
Ex: Given the following trees s and t…

s = 7
   / \
  8   3
t = 7
   / \
  8   3
     /
    1
return false
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
  ) {}
}

export function treeInTree(root: BinaryTreeNode, subRoot: BinaryTreeNode) {
  const areEqual = (node1: BinaryTreeNode, node2: BinaryTreeNode) => {
    if (!node1 || !node2) return !node1 && !node2
    if (node1.data !== node2.data) return false
    return (
      areEqual(node1.left, node2.left) && areEqual(node1.right, node2.right)
    )
  }

  const dfs = (node: BinaryTreeNode) => {
    if (!node) return false
    if (areEqual(node, subRoot)) return true
    return dfs(node.left) || dfs(node.right)
  }

  return dfs(root)
}
