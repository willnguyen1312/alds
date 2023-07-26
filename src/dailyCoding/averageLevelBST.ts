/*
This question is asked by Facebook.
Given a reference to the root of a binary tree,
return a list containing the average value in each level of the tree. 

Ex: Given the following binary tree…

       1
      / \
    6    8
   / \ 
  1   5 
return [1.0, 7.0, 3.0]
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
  ) {}
}

export function averageLevelBST(root: BinaryTreeNode): number[] {
  const result: number[] = []
  let queue: BinaryTreeNode[] = [root]

  while (queue.length) {
    const toQueue: BinaryTreeNode[] = []

    let total = 0

    for (const item of queue) {
      total += item.data

      if (item.left) {
        toQueue.push(item.left)
      }

      if (item.right) {
        toQueue.push(item.right)
      }
    }

    result.push(total / queue.length)
    queue = toQueue
  }

  return result
}
