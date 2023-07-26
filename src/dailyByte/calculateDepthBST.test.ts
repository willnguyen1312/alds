import { BinaryTreeNode, calculateDepthBST } from "./calculateDepthBST"

describe("calculateDepthBST function", () => {
  it("should work", () => {
    const node = new BinaryTreeNode(5)
    node.left = new BinaryTreeNode(1)
    node.right = new BinaryTreeNode(29)
    node.right.left = new BinaryTreeNode(4)
    node.right.right = new BinaryTreeNode(13)

    expect(calculateDepthBST(node)).toBe(3)
  })
})
