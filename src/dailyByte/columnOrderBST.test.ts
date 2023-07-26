import { BinaryTreeNode, columnOrderBST } from "./columnOrderBST"

describe("columnOrderBST function", () => {
  it("should work", () => {
    const node = new BinaryTreeNode(8)
    node.left = new BinaryTreeNode(2)
    node.right = new BinaryTreeNode(29)
    node.right.left = new BinaryTreeNode(3)
    node.right.right = new BinaryTreeNode(9)

    const actual = columnOrderBST(node)
    expect(actual).toEqual([[2], [8, 3], [29], [9]])
  })
})
