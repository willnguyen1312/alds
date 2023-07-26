import { BinaryTreeNode, levelWithMaxSum } from "./levelWithMaxSum"

describe("levelWithMaxSum function", () => {
  it("should work", () => {
    const n3 = new BinaryTreeNode(
      4,
      new BinaryTreeNode(3),
      new BinaryTreeNode(2),
    )
    const n2 = new BinaryTreeNode(
      5,
      new BinaryTreeNode(4),
      new BinaryTreeNode(-1),
    )
    const n1 = new BinaryTreeNode(1, n2, n3)

    const actual = levelWithMaxSum(n1)
    expect(actual).toBe(1)
  })
})
