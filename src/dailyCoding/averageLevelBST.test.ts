import { BinaryTreeNode, averageLevelBST } from "./averageLevelBST"

describe("averageLevelBST function", () => {
  it("should work", () => {
    const node = new BinaryTreeNode(
      1,
      new BinaryTreeNode(6, new BinaryTreeNode(1), new BinaryTreeNode(5)),
      new BinaryTreeNode(8),
    )

    const actual = averageLevelBST(node)
    expect(actual).toEqual([1, 7, 3])
  })
})
