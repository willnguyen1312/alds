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

export function rightSideViewBST(root: TreeNode): number[] {
  const res: number[] = []
  const queue = [root]

  while (queue.length > 0) {
    const n = queue.length
    res.push(queue[0].val)
    for (let i = 0; i < n; i++) {
      const node = queue.shift()

      for (const child of [node.right, node.left]) {
        if (child) queue.push(child)
      }
    }
  }

  return res
}
