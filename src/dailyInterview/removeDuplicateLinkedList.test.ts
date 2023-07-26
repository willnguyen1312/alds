import {
  LinkedListNode,
  removeDuplicateLinkedList,
} from "./removeDuplicateLinkedList"

describe("removeDuplicateLinkedList function", () => {
  it("should work", () => {
    const list = new LinkedListNode(
      1,
      new LinkedListNode(
        2,
        new LinkedListNode(2, new LinkedListNode(3, new LinkedListNode(3))),
      ),
    )

    const actual = removeDuplicateLinkedList(list)
    expect(actual).toMatchInlineSnapshot(`
LinkedListNode {
  "data": 1,
  "next": LinkedListNode {
    "data": 2,
    "next": LinkedListNode {
      "data": 3,
      "next": undefined,
    },
  },
}
`)
  })
})
