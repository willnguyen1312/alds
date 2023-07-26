/*
Given two binary trees, return whether or not the two trees are identical.
Note: identical meaning they exhibit the same structure and the same values at each node.
Ex: Given the following trees...

        2
       / \
      1   3
    2
   / \
  1   3

return true.
Ex: Given the following trees...

        1
         \
          9
           \
           18
    1
   /
  9
   \
    18

return false.
Ex: Given the following trees...

        2
       / \
      3   1
    2
   / \
  1   3

return false.   
*/

export class BinaryTreeNode {
  val: number
  left: BinaryTreeNode | null
  right: BinaryTreeNode | null

  constructor(val: number) {
    this.val = val
  }
}

export function checkIdenticalTreesIter(
  first: BinaryTreeNode,
  second: BinaryTreeNode,
): boolean {
  const stackA: BinaryTreeNode[] = [first]
  const stackB: BinaryTreeNode[] = [second]

  while (stackA.length && stackB.length) {
    const a = stackA.pop()
    const b = stackB.pop()

    if (
      a.val !== b.val ||
      a.left?.val !== b.left?.val ||
      a.right?.val !== b.right?.val
    ) {
      return false
    }

    if (a.left) {
      stackA.push(a.left)
    }

    if (a.right) {
      stackA.push(a.right)
    }

    if (b.left) {
      stackA.push(b.left)
    }

    if (b.right) {
      stackA.push(b.right)
    }
  }

  return true
}

export function checkIdenticalTreesRecur(
  first: BinaryTreeNode,
  second: BinaryTreeNode,
): boolean {
  if (!first && !second) return true

  if (first && second)
    return (
      first.val === second.val &&
      checkIdenticalTreesRecur(first.left, second.left) &&
      checkIdenticalTreesRecur(first.right, second.right)
    )

  return false
}
