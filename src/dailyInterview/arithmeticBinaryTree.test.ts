import {
  BinaryTreeNode,
  Action,
  arithmeticBinaryTree,
} from "./arithmeticBinaryTree"

describe("arithmeticBinaryTree", () => {
  it("should work", () => {
    const tree = new BinaryTreeNode(Action.TIMES)
    tree.left = new BinaryTreeNode(Action.PLUS)
    tree.left.left = new BinaryTreeNode(3)
    tree.left.right = new BinaryTreeNode(2)
    tree.right = new BinaryTreeNode(Action.PLUS)
    tree.right.left = new BinaryTreeNode(4)
    tree.right.right = new BinaryTreeNode(5)

    expect(arithmeticBinaryTree(tree)).toBe(45)
  })
})
