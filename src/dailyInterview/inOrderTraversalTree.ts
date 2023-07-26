/*
Hi, here's your problem today. This problem was recently asked by LinkedIn:

Given a binary tree, perform an in-order traversal both recursively and iteratively.
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
  ) {}
}

export function inOrderTraversalTreeRecur(root: BinaryTreeNode): number[] {
  const result: number[] = []

  function collect(node: BinaryTreeNode) {
    if (!node) {
      return
    }

    collect(node.left)
    result.push(node.data)
    collect(node.right)
  }

  collect(root)

  return result
}

export function inOrderTraversalTreeIter(root: BinaryTreeNode): number[] {
  if (!root) {
    return
  }

  const result: number[] = []

  const stack: BinaryTreeNode[] = []
  let curr = root

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }

    curr = stack.pop()

    result.push(curr.data)

    curr = curr.right
  }

  return result
}
