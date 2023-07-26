import {
  BinaryTreeNode,
  iterativeInorderTraversal,
} from "./iterativeInorderTraversal"

describe("iterativeInorderTraversal function", () => {
  it("should work", () => {
    const node = new BinaryTreeNode(2)
    node.left = new BinaryTreeNode(1)
    node.left.left = new BinaryTreeNode(4)
    node.left.right = new BinaryTreeNode(8)
    node.right = new BinaryTreeNode(7)

    const actual = iterativeInorderTraversal(node)
    expect(actual).toEqual([4, 1, 8, 2, 7])
  })
})
