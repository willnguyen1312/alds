export class TreeNode {
  val: number
  left?: TreeNode
  right?: TreeNode

  constructor(val: number, left?: TreeNode, right?: TreeNode) {
    this.val = val
    this.left = left
    this.right = right
  }
}

export function zigZagTraversal(root: TreeNode): number[][] {
  const res: number[][] = []
  const queue = [root]

  let left2Right = true

  while (queue.length > 0) {
    const n = queue.length
    const newLevel = []
    for (let i = 0; i < n; i++) {
      const node = queue.shift()
      newLevel.push(node.val)

      for (const child of [node.left, node.right]) {
        if (child) queue.push(child)
      }
    }
    if (!left2Right) {
      newLevel.reverse()
    }

    res.push(newLevel)
    left2Right = !left2Right
  }

  return res
}
