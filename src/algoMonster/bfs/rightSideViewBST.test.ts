import { rightSideViewBST, TreeNode } from "./rightSideViewBST"

describe("rightSideViewBST function", () => {
  it("should work", () => {
    const root = new TreeNode(10, new TreeNode(11), new TreeNode(12))
    expect(rightSideViewBST(root)).toEqual([10, 12])
  })
})
