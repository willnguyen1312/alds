import { BinaryTreeNode, findSubTree } from "./findSubTree"

describe("findSubTree function", () => {
  it("should work", () => {
    const t2 = new BinaryTreeNode(
      4,
      new BinaryTreeNode(3),
      new BinaryTreeNode(2),
    )
    const t3 = new BinaryTreeNode(
      5,
      new BinaryTreeNode(4),
      new BinaryTreeNode(-1),
    )
    const t = new BinaryTreeNode(1, t2, t3)

    const s = new BinaryTreeNode(
      4,
      new BinaryTreeNode(3),
      new BinaryTreeNode(2),
    )

    const actual = findSubTree(s, t)
    expect(actual).toBe(true)

    const f = new BinaryTreeNode(
      4,
      new BinaryTreeNode(13),
      new BinaryTreeNode(15),
    )

    const actual2 = findSubTree(f, t)
    expect(actual2).toBe(false)
  })
})
