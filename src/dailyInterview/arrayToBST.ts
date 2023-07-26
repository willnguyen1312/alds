/*
Hi, here's your problem today. This problem was recently asked by Apple:

Given a sorted array, convert it into a binary search tree.

Can you do this both recursively and iteratively?
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
    public low?: number,
    public high?: number,
  ) {}
}

export function arrayToBSTRecur(
  numbs: number[],
  left = 0,
  right = numbs.length,
): BinaryTreeNode {
  if (left > right) {
    return null
  }

  const middle = Math.floor((left + right) / 2)
  const root = new BinaryTreeNode(numbs[middle])

  root.left = arrayToBSTRecur(numbs, left, middle - 1)
  root.right = arrayToBSTRecur(numbs, middle + 1, right)

  return root
}

export function arrayToBSTIter(numbs: number[]): BinaryTreeNode {
  const length = numbs.length
  const middle = Math.floor(numbs.length / 2)
  const root = new BinaryTreeNode(numbs[middle], null, null, 0, length)
  const stack = [root]

  while (stack.length) {
    const current = stack.pop()
    const middle = Math.floor((current.high + current.low) / 2)

    if (current.low < middle) {
      const node = new BinaryTreeNode(
        numbs[Math.floor((middle - 1 + current.low) / 2)],
      )
      current.left = node
      node.low = current.low
      node.high = middle - 1
      stack.push(node)
    }

    if (current.high > middle) {
      const node = new BinaryTreeNode(
        numbs[Math.floor((current.high + middle + 1) / 2)],
      )
      current.right = node
      node.low = middle + 1
      node.high = current.high
      stack.push(node)
    }
  }

  return root
}
