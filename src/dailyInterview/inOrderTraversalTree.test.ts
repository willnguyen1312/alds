import {
  BinaryTreeNode,
  inOrderTraversalTreeRecur,
  inOrderTraversalTreeIter,
} from "./inOrderTraversalTree"

describe("inOrderTraversalTree function", () => {
  it("should work", () => {
    const node = new BinaryTreeNode(
      12,
      new BinaryTreeNode(6, new BinaryTreeNode(2), new BinaryTreeNode(3)),
      new BinaryTreeNode(4, new BinaryTreeNode(7), new BinaryTreeNode(8)),
    )
    const actual1 = inOrderTraversalTreeRecur(node)
    const actual2 = inOrderTraversalTreeIter(node)
    const expected = [2, 6, 3, 12, 7, 4, 8]

    expect(actual1).toEqual(expected)
    expect(actual2).toEqual(expected)
  })
})
