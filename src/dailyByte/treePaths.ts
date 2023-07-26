/*
Given the reference to the root of a binary tree and a value k,
return the number of paths in the tree such that the sum of the nodes along the path equals k. 

Note: The path does not need to start at the root of the tree, but must move downward. 

Ex: Given the following binary tree and value k…

      3
     / \
    1   8
k = 11, return 1 (3 -> 8).
Ex: Given the following binary tree and value k…

      2
     / \
   -4   9
   /
  2
k = 2, return 3 (2, 2 -> -4, -4 -> 2).
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
  ) {}
}

function treePathsUtil(
  node: BinaryTreeNode,
  k: number,
  path: string,
  allPaths: Set<string>,
) {
  if (!node) {
    return
  }

  let p1 = node.data.toString()

  let p2 = ""

  if (path.length > 0) {
    p2 = path + "," + p1
  } else {
    p2 = p1
  }

  if (node.data === k) {
    allPaths.add(p1)
  }

  let sum = 0

  let p2Arr = p2.split(",")

  for (let i = 0; i < p2Arr.length; i++) {
    sum = sum + Number(p2Arr[i])
  }

  if (sum === k) {
    allPaths.add(p2)
  }

  treePathsUtil(node.left, k, p1, allPaths)
  treePathsUtil(node.left, k, p2, allPaths)
  treePathsUtil(node.right, k, p1, allPaths)
  treePathsUtil(node.right, k, p2, allPaths)
}

export function treePaths(root: BinaryTreeNode, k: number): number {
  const result: Set<string> = new Set()
  treePathsUtil(root, k, "", result)
  return result.size
}
