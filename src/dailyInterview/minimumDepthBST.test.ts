import { BinaryTreeNode, minimumDepthBST } from "./minimumDepthBST"

describe("minimumDepthBST function", () => {
  it("should work", () => {
    const n3 = new BinaryTreeNode(3, null, new BinaryTreeNode(4))
    const n2 = new BinaryTreeNode(2, new BinaryTreeNode(3))
    const n1 = new BinaryTreeNode(1, n2, n3)

    const actual = minimumDepthBST(n1)
    expect(actual).toBe(2)
  })
})
