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

export function visibleBSTValues(root: BinaryTreeNode): number[] {
  const result: number[] = [root.data]
  let queue: BinaryTreeNode[] = [root]

  while (queue.length) {
    const toQueue: BinaryTreeNode[] = []

    for (const node of queue) {
      if (node.left) {
        toQueue.push(node.left)
      }

      if (node.right) {
        toQueue.push(node.right)
      }
    }

    if (toQueue.length) {
      result.push(toQueue[0].data)
    }

    queue = toQueue
  }

  return result
}
