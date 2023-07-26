import { checkBalancedBinaryTree, TreeNode } from "./checkBalancedBinaryTree"

describe("checkBalancedBinaryTree function", () => {
  it("should work", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(5),
    )

    expect(checkBalancedBinaryTree(root)).toBe(true)
  })
})
