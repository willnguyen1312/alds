import { BinaryTreeNode, secondLargestNodeBST } from "./secondLargestNodeBST"

describe("secondLargestNodeBST function", () => {
  it("should work", () => {
    const node = new BinaryTreeNode(5)
    node.left = new BinaryTreeNode(3)
    node.right = new BinaryTreeNode(7)
    node.left.left = new BinaryTreeNode(1)
    node.left.right = new BinaryTreeNode(4)
    node.right.left = new BinaryTreeNode(6)

    const actual = secondLargestNodeBST(node)
    expect(actual).toBe(6)
  })
})
