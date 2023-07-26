/*
Hi, here's your problem today. This problem was recently asked by Twitter:

You are given the root of a binary tree. Find the level for the binary tree with the minimum sum,
and return that value.

For instance, in the example below, the sums of the trees are 10, 2 + 8 = 10, and 4 + 1 + 2 = 7.
So, the answer here should be 7.
*/

export class BinaryTreeNode {
  val: number
  left: BinaryTreeNode | null
  right: BinaryTreeNode | null

  constructor(val: number) {
    this.val = val
  }
}

function getSum(numbs: BinaryTreeNode[]) {
  return numbs.reduce((acc, cur) => acc + cur.val, 0)
}

export function levelWithMinimumSum(root: BinaryTreeNode): number {
  let result = Number.MAX_VALUE
  const queue: BinaryTreeNode[] = [root]

  while (queue.length) {
    const toQueue: BinaryTreeNode[] = []

    const currentSum = getSum(queue)
    result = Math.min(currentSum, result)

    while (queue.length) {
      const currentNode = queue.pop()

      if (currentNode.left) {
        toQueue.push(currentNode.left)
      }

      if (currentNode.right) {
        toQueue.push(currentNode.right)
      }
    }

    queue.push(...toQueue)
  }

  return result
}
