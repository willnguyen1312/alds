/*
Given a binary tree, return whether or not it forms a reflection across its center
(i.e. a line drawn straight down starting from the root). 
Note: a reflection is when an image,
flipped across a specified line, forms the same image. 

Ex: Given the following tree…

   2
 /   \
1     1
return true as when the tree is reflected across its center all the nodes match.
Ex: Given the following tree…

    1
   / \
  5   5
   \    \
    7    7
return false as when the tree is reflected
across its center the nodes containing sevens do not match.
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
  ) {}
}

function checkValid(numbs: (number | undefined)[]): boolean {
  if (numbs.length % 2) {
    return false
  }

  const mid = Math.floor(numbs.length / 2)

  for (let index = 0; index < mid; index++) {
    const element = numbs[index]
    const compared = numbs[numbs.length - 1 - index]
    if (element !== compared) {
      return false
    }
  }

  return true
}

export function checkTreeReflect(root: BinaryTreeNode): boolean {
  let queue: BinaryTreeNode[] = [root]

  while (queue.length) {
    const toQueue: BinaryTreeNode[] = []
    const numbs: number[] = []

    for (const item of queue) {
      numbs.push(item.left?.data)
      if (item.left) {
        toQueue.push(item.left)
      }

      numbs.push(item.right?.data)
      if (item.right) {
        toQueue.push(item.right)
      }
    }

    if (!checkValid(numbs)) {
      return false
    }

    queue = toQueue
  }

  return true
}
