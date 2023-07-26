import { BinaryTreeNode, findBSTMode } from "./findBSTMode"

describe("findBSTMode function", () => {
  it("should work", () => {
    const node = new BinaryTreeNode(7)
    node.left = new BinaryTreeNode(4)
    node.left.left = new BinaryTreeNode(1)
    node.left.right = new BinaryTreeNode(4)
    node.right = new BinaryTreeNode(9)
    node.right.left = new BinaryTreeNode(8)
    node.right.right = new BinaryTreeNode(9)
    node.right.right.right = new BinaryTreeNode(9)

    const actual = findBSTMode(node)
    expect(actual).toEqual(9)
  })
})
