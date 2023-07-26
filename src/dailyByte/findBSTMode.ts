/*
Given a binary tree return all the values you’d be able to see
if you were standing on the left side of it with values ordered from top to bottom.

Ex: Given the following tree…

-->    4
      / \
-->  2   7
return [4, 2]
Ex: Given the following tree…

-->        7
         /  \
-->     4     9
       / \   / \
-->   1   4 8   9
                 \
-->               9
return [7, 4, 1, 9]

*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
  ) {}
}

export function findBSTMode(root: BinaryTreeNode): number {
  const countMap: Map<number, number> = new Map()
  let queue: BinaryTreeNode[] = [root]

  while (queue.length) {
    const toQueue: BinaryTreeNode[] = []

    for (const node of queue) {
      countMap.set(node.data, (countMap.get(node.data) || 0) + 1)
      if (node.left) {
        toQueue.push(node.left)
      }

      if (node.right) {
        toQueue.push(node.right)
      }
    }

    queue = toQueue
  }

  let result: number
  let max = Number.MIN_VALUE

  for (const [key, value] of countMap) {
    if (value > max) {
      max = value
      result = key
    }
  }

  return result
}
