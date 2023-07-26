export class BinaryTreeNode {
  val: any
  left?: BinaryTreeNode | null
  right?: BinaryTreeNode | null

  constructor(val: number) {
    this.val = val
  }
}

export function preOrderTraversal(root: BinaryTreeNode): any[] {
  let result = []

  function traverse(root: BinaryTreeNode) {
    if (!root) {
      return
    }
    result.push(root.val)
    traverse(root.left)
    traverse(root.right)
  }

  traverse(root)

  return result
}

export function inOrderTraversal(root: BinaryTreeNode): any[] {
  let result = []

  function traverse(root: BinaryTreeNode) {
    if (!root) {
      return
    }
    traverse(root.left)
    result.push(root.val)
    traverse(root.right)
  }

  traverse(root)

  return result
}

export function postOrderTraversal(root: BinaryTreeNode): any[] {
  let result = []

  function traverse(root: BinaryTreeNode) {
    if (!root) {
      return
    }
    traverse(root.left)
    traverse(root.right)
    result.push(root.val)
  }

  traverse(root)

  return result
}
