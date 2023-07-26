import { BinaryTreeNode, zigZagBinaryTree } from "./zigZagBinaryTree"

describe("zigZagBinaryTree function", () => {
  it("should work", () => {
    const n4 = new BinaryTreeNode(4)
    const n5 = new BinaryTreeNode(5)
    const n6 = new BinaryTreeNode(6)
    const n7 = new BinaryTreeNode(7)
    const n2 = new BinaryTreeNode(2, n4, n5)
    const n3 = new BinaryTreeNode(3, n6, n7)
    const n1 = new BinaryTreeNode(1, n2, n3)

    expect(zigZagBinaryTree(n1)).toEqual([1, 3, 2, 4, 5, 6, 7])
  })
})
