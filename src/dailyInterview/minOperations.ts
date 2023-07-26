/*
Hi, here's your problem today. This problem was recently asked by LinkedIn:

You are only allowed to perform 2 operations, multiply a number by 2, or subtract a number by 1.
Given a number x and a number y, find the minimum number of operations needed to go from x to y.
*/

export class BinaryTreeNode {
  constructor(
    public val: number,
    public level: number,
  ) {}
}

export function minOperations(x: number, y: number): number {
  const visit: Set<number> = new Set()

  const queue: BinaryTreeNode[] = []
  const rootNode = new BinaryTreeNode(x, 0)
  queue.push(rootNode)

  while (queue.length) {
    const currentNode = queue.shift()
    const val = currentNode.val
    const level = currentNode.level

    if (val === y) {
      return level
    }

    visit.add(val)

    if (val * 2 === y || val - 1 === y) {
      return level + 1
    }

    if (!visit.has(val * 2)) {
      const node = new BinaryTreeNode(val * 2, level + 1)
      queue.push(node)
    }

    if (val - 1 >= 0 && !visit.has(val - 1)) {
      const node = new BinaryTreeNode(val - 1, level + 1)
      queue.push(node)
    }
  }
}

export function minOperations2(numb: number): number {
  const dp = Array.from({ length: numb + 1 }, () => Number.MAX_VALUE)
  dp[1] = 0

  for (let i = 2; i <= numb; i++) {
    if (i % 2 === 0) {
      const x = dp[Math.floor(i / 2)]

      if (x + 1 < dp[i]) {
        dp[i] = x + 1
      }
    }

    if (i % 3 === 0) {
      const x = dp[Math.floor(i / 3)]
      if (x + 1 < dp[i]) {
        dp[i] = x + 1
      }
    }

    const x = dp[i - 1]

    if (x + 1 < dp[i]) {
      dp[i] = x + 1
    }
  }

  return dp[numb]
}
