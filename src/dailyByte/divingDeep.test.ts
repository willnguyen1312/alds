import { BinaryTreeNode, divingDeep } from "./divingDeep"

describe("divingDeep function", () => {
  it("should work", () => {
    const node = new BinaryTreeNode(4, [
      new BinaryTreeNode(3, [new BinaryTreeNode(7)]),
      new BinaryTreeNode(9),
      new BinaryTreeNode(2, [new BinaryTreeNode(2)]),
    ])

    const actual = divingDeep(node)
    expect(actual).toBe(3)
  })
})
