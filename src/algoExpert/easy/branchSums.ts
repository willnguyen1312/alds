export function branchSums(root: TreeNode): number[] {
  const result: number[] = []
  calculateBranchSum(root, 0, result)
  return result
}

function calculateBranchSum(
  node: TreeNode,
  currentSum: number,
  sums: number[],
) {
  const newSum = currentSum + node.val
  if (!node.left && !node.right) {
    sums.push(newSum)
    return
  }

  node.left && calculateBranchSum(node.left, newSum, sums)
  node.right && calculateBranchSum(node.right, newSum, sums)
}
