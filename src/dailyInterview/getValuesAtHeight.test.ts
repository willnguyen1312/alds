import { BinaryTreeNode, getValuesAtHeight } from "./getValuesAtHeight"

describe("getValuesAtHeight function", () => {
  it("should work", () => {
    const a = new BinaryTreeNode(1)
    a.left = new BinaryTreeNode(2)
    a.right = new BinaryTreeNode(3)
    a.left.left = new BinaryTreeNode(4)
    a.left.right = new BinaryTreeNode(5)
    a.right.right = new BinaryTreeNode(7)

    expect(getValuesAtHeight(a, 3)).toEqual([4, 5, 7])
  })
})
