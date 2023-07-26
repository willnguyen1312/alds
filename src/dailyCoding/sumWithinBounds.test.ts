import { BinaryTreeNode, sumWithinBounds } from "./sumWithinBounds"

describe("sumWithinBounds function", () => {
  it("should work", () => {
    const node = new BinaryTreeNode(1)
    node.left = new BinaryTreeNode(7)
    node.left.left = new BinaryTreeNode(4)

    node.right = new BinaryTreeNode(5)
    node.right.left = new BinaryTreeNode(3)
    node.right.right = new BinaryTreeNode(9)

    const actual = sumWithinBounds(node, 3, 5)
    expect(actual).toBe(12)
  })
})
