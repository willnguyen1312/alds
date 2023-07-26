/*
Hi, here's your problem today. This problem was recently asked by Apple:

Given an integer k and a binary search tree, find the floor (less than or equal to) of k, and the ceiling (larger than or equal to) of k. If either does not exist, then print them as None.

Here is the definition of a node for the tree.
*/

export class BinaryTreeNode {
  val: number
  left: BinaryTreeNode | null
  right: BinaryTreeNode | null

  constructor(val: number) {
    this.val = val
  }
}

export function findFloorAndCeilingOfABinarySearchTree(
  root: BinaryTreeNode,
  target: number,
): number[] {
  let floor = -1
  let ceil = -1

  while (root) {
    if (root.val === target) {
      ceil = root.val
      floor = root.val
      return [floor, ceil]
    }

    if (target > root.val) {
      floor = root.val
      root = root.right
    } else {
      ceil = root.val
      root = root.left
    }
  }

  return [floor, ceil]
}

export function findCeil(node: BinaryTreeNode, target: number) {
  if (!node) {
    return -1
  }

  if (node.val === target) {
    return node.val
  }

  if (node.val < target) {
    return findCeil(node.right, target)
  }

  let ceil = findCeil(node.left, target)

  return ceil !== -1 ? ceil : node.val
}

export function findFloor(node: BinaryTreeNode, target: number) {
  if (!node) {
    return -1
  }

  if (node.val === target) {
    return node.val
  }

  if (node.val > target) {
    return findFloor(node.left, target)
  }

  let floor = findFloor(node.right, target)

  return floor !== -1 ? floor : node.val
}
