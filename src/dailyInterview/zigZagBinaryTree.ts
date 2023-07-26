/*
Hi, here's your problem today. This problem was recently asked by Apple:

Given a binary tree, return the list of node values in zigzag order traversal. Here's an example

# Input:
#         1
#       /   \
#      2     3
#     / \   / \
#    4   5 6   7
#
# Output: [1, 3, 2, 4, 5, 6, 7]
*/

export class BinaryTreeNode {
  val: number
  left?: BinaryTreeNode | null
  right?: BinaryTreeNode | null

  constructor(val: number, left?: BinaryTreeNode, right?: BinaryTreeNode) {
    this.val = val
    this.left = left
    this.right = right
  }
}

export function zigZagBinaryTree(rootNode: BinaryTreeNode): number[] {
  const result: number[] = []
  let currentLevel: BinaryTreeNode[] = [rootNode]
  let nextLevel: BinaryTreeNode[] = []

  let leftToRight = true

  while (currentLevel.length) {
    const node = currentLevel.pop()

    result.push(node.val)

    if (leftToRight) {
      if (node.left) {
        nextLevel.push(node.left)
      }

      if (node.right) {
        nextLevel.push(node.right)
      }
    } else {
      if (node.right) {
        nextLevel.push(node.right)
      }

      if (node.left) {
        nextLevel.push(node.left)
      }
    }

    if (!currentLevel.length) {
      leftToRight = !leftToRight
      ;[currentLevel, nextLevel] = [nextLevel, currentLevel]
    }
  }

  return result
}
