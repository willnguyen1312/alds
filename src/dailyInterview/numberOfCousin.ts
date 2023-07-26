/*
Hi, here's your problem today. This problem was recently asked by Amazon:

Given a binary tree and a given node value, return all of the node's cousins.
Two nodes are considered cousins if they are on the same level of the tree with different parents.
You can assume that all nodes will have their own unique value.

#     1
#    / \
#   2   3
#  / \   \
# 4   6   5
*/

export class BinaryTreeNode {
  val: number
  left?: BinaryTreeNode | null
  right?: BinaryTreeNode | null

  constructor(val: number) {
    this.val = val
  }
}

export function numberOfCousin(root: BinaryTreeNode, target: number): number[] {
  const result: number[] = []
  const queue: BinaryTreeNode[] = [root]

  if (root.val === target) {
    return result
  }

  while (queue.length) {
    const toQueue: BinaryTreeNode[] = []
    let foundParent: BinaryTreeNode

    while (queue.length) {
      const node = queue.shift()

      if (node.left) {
        if (node.left.val === target) {
          foundParent = node
        } else {
          toQueue.push(node.left)
        }
      }

      if (node.right && !foundParent) {
        if (node.right.val === target) {
          foundParent = node
          node.left && toQueue.pop()
        } else {
          toQueue.push(node.right)
        }
      }
    }

    if (foundParent) {
      return toQueue.map((node) => node.val)
    } else {
      queue.push(...toQueue)
    }
  }

  return result
}
