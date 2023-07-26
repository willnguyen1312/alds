class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  const list: number[] = []

  getListRecursive(root, list)

  return list
}

function getListRecursive(node: TreeNode | null, list: number[]) {
  if (node === null) {
    return
  }
  list.push(node.val)
  getListRecursive(node.left, list)
  getListRecursive(node.right, list)
}
