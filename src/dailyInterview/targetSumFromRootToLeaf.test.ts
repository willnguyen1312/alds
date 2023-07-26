import {
  BinaryTreeNode,
  targetSumFromRootToLeaf,
} from "./targetSumFromRootToLeaf"

describe("targetSumFromRootToLeaf function", () => {
  it("should work", () => {
    const n6 = new BinaryTreeNode(6)
    const n4 = new BinaryTreeNode(4)
    const n3 = new BinaryTreeNode(3, null, n4)
    const n2 = new BinaryTreeNode(2, null, n6)
    const n1 = new BinaryTreeNode(1, n2, n3)

    const actual = targetSumFromRootToLeaf(n1, 9)
    expect(actual).toBe(true)
  })
})
