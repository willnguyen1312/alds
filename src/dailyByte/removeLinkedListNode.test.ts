import { LinkedListNode, removeLinkedListNode } from "./removeLinkedListNode"

describe("removeLinkedListNode function", () => {
  it("should work", () => {
    const node = new LinkedListNode(
      1,
      new LinkedListNode(2, new LinkedListNode(3)),
    )

    const actual = removeLinkedListNode(node, 3)
    expect(actual).toMatchInlineSnapshot(`
LinkedListNode {
  "data": 1,
  "next": LinkedListNode {
    "data": 2,
    "next": undefined,
  },
}
`)
  })
})
