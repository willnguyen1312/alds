/*
Hi, here's your problem today. This problem was recently asked by Amazon:

Given a binary tree, return all values given a certain height h
*/

export class BinaryTreeNode {
  val: number
  left: BinaryTreeNode | null
  right: BinaryTreeNode | null

  constructor(val: number) {
    this.val = val
  }
}

export function getValuesAtHeight(
  root: BinaryTreeNode,
  height: number,
): number[] {
  const result: number[] = []

  function collect(node: BinaryTreeNode | null, currentHeight: number = 0) {
    if (node) {
      collect(node.left, ++currentHeight)

      if (currentHeight === height) {
        result.push(node.val)
      }

      collect(node.right, currentHeight)
    }
  }

  collect(root)

  return result
}
