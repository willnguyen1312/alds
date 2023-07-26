import { BinaryTreeNode, checkTreeReflect } from "./checkTreeReflect"

describe("checkTreeReflect function", () => {
  it("should work", () => {
    const node = new BinaryTreeNode(2)
    node.left = new BinaryTreeNode(5)
    node.left.right = new BinaryTreeNode(7)
    node.right = new BinaryTreeNode(5)
    node.right.right = new BinaryTreeNode(7)

    const actual = checkTreeReflect(node)
    expect(actual).toBe(false)
  })
})
