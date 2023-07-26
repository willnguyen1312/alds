export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
  ) {}
}

export function countUnivalSubTrees(root: BinaryTreeNode) {
  function helper(node: BinaryTreeNode): [number, boolean] {
    if (!node) {
      return [0, true]
    }

    const [leftCount, isLeftUnival] = helper(node.left)
    const [rightCount, isRightUnival] = helper(node.right)
    const totalCount = leftCount + rightCount

    if (isLeftUnival && isRightUnival) {
      if (node.left && node.data !== node.left.data) {
        return [totalCount, false]
      }

      if (root.right && root.data !== root.right.data) {
        return [totalCount, false]
      }

      return [totalCount + 1, true]
    }

    return [totalCount, false]
  }

  return helper(root)[0]
}
