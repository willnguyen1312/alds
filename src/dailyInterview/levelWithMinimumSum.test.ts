import { BinaryTreeNode, levelWithMinimumSum } from "./levelWithMinimumSum"

describe("levelWithMinimumSum function", () => {
  it("should work", () => {
    const node = new BinaryTreeNode(10)
    node.left = new BinaryTreeNode(2)
    node.right = new BinaryTreeNode(8)
    node.left.left = new BinaryTreeNode(4)
    node.left.right = new BinaryTreeNode(1)
    node.right.right = new BinaryTreeNode(2)

    expect(levelWithMinimumSum(node)).toBe(7)
  })
})
