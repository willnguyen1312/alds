import { BinaryTreeNode, validateBST } from "./validateBST"

describe("validateBST function", () => {
  it("should work", () => {
    const a = new BinaryTreeNode(5)
    a.left = new BinaryTreeNode(3)
    a.right = new BinaryTreeNode(7)
    a.left.left = new BinaryTreeNode(1)
    a.left.right = new BinaryTreeNode(4)
    a.right.left = new BinaryTreeNode(6)

    expect(validateBST(a)).toBe(true)

    const b = new BinaryTreeNode(5)
    b.left = new BinaryTreeNode(3)
    b.right = new BinaryTreeNode(7)
    b.left.left = new BinaryTreeNode(1)
    b.left.right = new BinaryTreeNode(4)
    b.right.left = new BinaryTreeNode(16)

    expect(validateBST(b)).toBe(false)
  })
})
