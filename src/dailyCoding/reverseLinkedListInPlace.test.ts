import {
  LinkedListNode,
  reverseLinkedListInPlace,
} from "./reverseLinkedListInPlace"

describe("reverseLinkedListInPlace function", () => {
  it("should work", () => {
    const node = new LinkedListNode(
      1,
      new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(4))),
    )

    const actual = reverseLinkedListInPlace(node)
    expect(actual).toMatchInlineSnapshot(`
LinkedListNode {
  "data": 4,
  "next": LinkedListNode {
    "data": 3,
    "next": LinkedListNode {
      "data": 2,
      "next": LinkedListNode {
        "data": 1,
        "next": null,
      },
    },
  },
}
`)
  })
})
