import { BinaryTreeNode, getMaxPathSum } from "./getMaxPathSum"

describe("getMaxPathSum function", () => {
  it("should work", () => {
    const root = new BinaryTreeNode(10)
    root.left = new BinaryTreeNode(2)
    root.right = new BinaryTreeNode(10)
    root.left.left = new BinaryTreeNode(20)
    root.left.right = new BinaryTreeNode(1)
    root.right.right = new BinaryTreeNode(-25)
    root.right.right.left = new BinaryTreeNode(3)
    root.right.right.right = new BinaryTreeNode(4)
    expect(getMaxPathSum(root)).toBe(42)
  })
})
