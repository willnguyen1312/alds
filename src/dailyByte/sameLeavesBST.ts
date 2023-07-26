/*
Given two binary trees, return whether or not both trees have the same leaf sequence.
Two trees have the same leaf sequence if both trees’ leaves read the same from left to right. 

Ex: Given the following trees…

   1
 /   \
1     3
and


   7
 /   \
1     2
return false as both the trees' leaves don't read the same from left to right (i.e. [1, 3] and [1, 2]).
Ex: Given the following trees…

    8
   / \
  2   29
    /  \
   3    9
and

    8
   / \
  2  29
 /   /  \
2   3    9
     \
      3
return true as both the trees' leaves read the same from left to right (i.e. [2, 3, 9] and [2, 3, 9]).
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
  ) {}
}

function getLeavesPath(node: BinaryTreeNode): string {
  const numbs: number[] = []

  function getLeavesPathHelper(node: BinaryTreeNode) {
    if (!node) {
      return
    }

    if (!node.left && !node.right) {
      numbs.push(node.data)
    }

    getLeavesPathHelper(node.left)
    getLeavesPathHelper(node.right)
  }

  getLeavesPathHelper(node)
  return numbs.join("")
}

export function sameLeavesBST(
  first: BinaryTreeNode,
  second: BinaryTreeNode,
): boolean {
  return getLeavesPath(first) === getLeavesPath(second)
}
