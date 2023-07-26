import { BinaryTreeNode, inorderSuccessor } from "./inorderSuccessor"

describe("inorderSuccessor function", () => {
  it("should work", () => {
    const tree = new BinaryTreeNode(3)
    tree.left = new BinaryTreeNode(2)
    tree.right = new BinaryTreeNode(4)
    tree.left.parent = tree
    tree.right.parent = tree
    tree.left.left = new BinaryTreeNode(1)
    tree.left.left.parent = tree.left
    tree.right.right = new BinaryTreeNode(5)
    tree.right.right.parent = tree.right

    expect(inorderSuccessor(tree.left)).toBe(3)
    expect(inorderSuccessor(tree.right)).toBe(5)
  })
})
