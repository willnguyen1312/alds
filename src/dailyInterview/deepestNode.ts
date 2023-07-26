/*
Hi, here's your problem today. This problem was recently asked by Google:

You are given the root of a binary tree. Return the deepest node (the furthest node from the root).

Example:

    a
   / \
  b   c
 /
d

The deepest node in this tree is d at depth 3.
*/

export class BinaryTreeNode {
  val: string
  left: BinaryTreeNode | null
  right: BinaryTreeNode | null

  constructor(val: string) {
    this.val = val
  }
}

export function deepestNode(root: BinaryTreeNode): [BinaryTreeNode, number] {
  const left = deepestNodeHelper(root.left, root, 1)
  const right = deepestNodeHelper(root.right, root, 1)

  return left[1] > right[1] ? left : right
}

function deepestNodeHelper(
  node: BinaryTreeNode | null,
  parent: BinaryTreeNode,
  depth: number = 0,
) {
  if (!node) {
    return [parent, depth]
  }

  const left = deepestNodeHelper(node.left, node, depth + 1)
  const right = deepestNodeHelper(node.right, node, depth + 1)

  return left[1] > right[1] ? left : right
}

export function deepestNode2(root: BinaryTreeNode): [BinaryTreeNode, number] {
  let maxLevel = Number.MIN_VALUE
  let res: BinaryTreeNode

  function find(root: BinaryTreeNode, level: number) {
    if (root) {
      find(root.left, ++level)

      if (level > maxLevel) {
        res = root
        maxLevel = level
      }

      find(root.right, level)
    }
  }

  find(root, 0)

  return [res, maxLevel]
}

export function deepestNode3(root: BinaryTreeNode): BinaryTreeNode {
  let result = null

  let queue = []
  queue.push(root)

  while (queue.length) {
    result = queue.shift()
    if (result.left) queue.push(result.left)
    if (result.right) queue.push(result.right)
  }

  return result
}
