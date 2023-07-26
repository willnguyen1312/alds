export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
  ) {}
}

export function getBound(
  root: BinaryTreeNode,
  target: number,
  floor?: number,
  ceil?: number,
) {
  if (!root) {
    return [floor, ceil]
  }

  if (target === root.data) {
    return [target, target]
  }

  if (target < root.data) {
    ;[floor, ceil] = getBound(root.left, target, floor, root.data)
  }

  if (target > root.data) {
    ;[floor, ceil] = getBound(root.right, target, root.data, ceil)
  }

  return [floor, ceil]
}
