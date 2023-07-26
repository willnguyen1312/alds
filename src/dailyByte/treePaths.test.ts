import { BinaryTreeNode, treePaths } from "./treePaths"

describe("treePaths function", () => {
  it("should work", () => {
    const node = new BinaryTreeNode(2)
    node.left = new BinaryTreeNode(-4)
    node.left.left = new BinaryTreeNode(2)
    node.right = new BinaryTreeNode(9)

    const actual = treePaths(node, -2)
    expect(actual).toBe(2)
  })
})
