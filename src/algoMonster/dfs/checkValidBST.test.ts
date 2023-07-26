import {
  TreeNode,
  checkValidBSTIterRecur,
  checkValidBSTIter,
} from "./checkValidBST"

describe("checkBalancedBinaryTree function", () => {
  it("should work", () => {
    const root = new TreeNode(
      5,
      new TreeNode(3, new TreeNode(1), new TreeNode(4)),
      new TreeNode(6, new TreeNode(2), new TreeNode(7)),
    )

    expect(checkValidBSTIterRecur(root)).toBe(false)
    expect(checkValidBSTIter(root)).toBe(false)
  })
})
