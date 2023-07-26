import { LinkedListNode, reverseList } from "./reverseList"

describe("reverseList function", () => {
  it("should work", () => {
    const node = new LinkedListNode(
      1,
      new LinkedListNode(2, new LinkedListNode(3)),
    )

    const actual = reverseList(node)
    expect(actual).toMatchInlineSnapshot(`
LinkedListNode {
  "data": 3,
  "next": LinkedListNode {
    "data": 2,
    "next": LinkedListNode {
      "data": 1,
      "next": null,
    },
  },
}
`)
  })
})
