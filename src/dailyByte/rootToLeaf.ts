/*
Given a binary tree, return a list of strings containing all root to leaf paths. 

Ex: Given the following tree…

   1
 /   \
2     3
return ["1->2", "1->3"]
Ex: Given the following tree…

    8
   / \
  2  29
    /  \
   3    9
return ["8->2", "8->29->3", "8->29->9"]
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
  ) {}
}

export function rootToLeaf(root: BinaryTreeNode): number[][] {
  const result: number[][] = []

  function collect(node: BinaryTreeNode, path: number[]) {
    if (!node.left && !node.right) {
      result.push(path.slice())
      return
    }

    if (node.left) {
      path.push(node.left.data)
      collect(node.left, path)
      path.pop()
    }

    if (node.right) {
      path.push(node.right.data)
      collect(node.right, path)
      path.pop()
    }
  }

  collect(root, [root.data])

  return result
}
