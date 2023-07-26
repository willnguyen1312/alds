import { idsToTree } from "./idsToTree"

describe("idsToTree function", () => {
  it("should work", () => {
    const actual = idsToTree([2, 4, 3, 7], [0, 2, 2, 3])

    expect(actual).toMatchInlineSnapshot(`
BinaryTreeNode {
  "data": 2,
  "left": BinaryTreeNode {
    "data": 4,
    "left": undefined,
    "right": undefined,
  },
  "right": BinaryTreeNode {
    "data": 3,
    "left": BinaryTreeNode {
      "data": 7,
      "left": undefined,
      "right": undefined,
    },
    "right": undefined,
  },
}
`)
  })
})
