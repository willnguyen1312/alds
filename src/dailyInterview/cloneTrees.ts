/*
Hi, here's your problem today. This problem was recently asked by Facebook:

Given two binary trees that are duplicates of one another, and given a node in one tree,
find that corresponding node in the second tree.

For instance, in the tree below, we're looking for Node #4.

For this problem, you can assume that:
- There can be duplicate values in the tree
(so comparing node1.value == node2.value isn't going to work).

// #  1
// # / \
// #2   3
// #   / \
// #  4*  5

Can you solve this both recursively and iteratively?
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
  ) {}
}

export function cloneTreesIter(
  first: BinaryTreeNode,
  second: BinaryTreeNode,
  firstTarget: BinaryTreeNode,
) {
  const firstStack = [first]
  const secondStack = [second]

  while (firstStack.length && secondStack.length) {
    const firstNode = firstStack.pop()
    const secondNode = secondStack.pop()

    if (firstNode === firstTarget) {
      return secondNode
    }

    if (firstNode.left) {
      firstStack.push(firstNode.left)
      secondStack.push(secondNode.left)
    }

    if (firstNode.right) {
      firstStack.push(firstNode.right)
      secondStack.push(secondNode.right)
    }
  }
}

export function cloneTreesRecur(
  first: BinaryTreeNode,
  second: BinaryTreeNode,
  firstTarget: BinaryTreeNode,
) {
  if (first === firstTarget) {
    return second
  }

  if (first.left) {
    const found = cloneTreesRecur(first.left, second.left, firstTarget)
    if (found) {
      return found
    }
  }

  if (first.right) {
    const found = cloneTreesRecur(first.right, second.right, firstTarget)
    if (found) {
      return found
    }
  }
}
