import { BinaryTreeNode, duplicateSubtrees } from "./duplicateSubtrees"

describe("duplicateSubtrees function", () => {
  it("should work", () => {
    const n3_1 = new BinaryTreeNode(3)
    const n2_1 = new BinaryTreeNode(2, n3_1)
    const n3_2 = new BinaryTreeNode(3)
    const n2_2 = new BinaryTreeNode(2, n3_2)
    const n1 = new BinaryTreeNode(1, n2_1, n2_2)

    const actual = duplicateSubtrees(n1)
    expect(actual).toEqual(["(3)", "((3)2)"])
  })
})
