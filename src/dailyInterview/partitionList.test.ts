import { LinkedListNode, partitionList } from "./partitionList"

describe("partitionList function", () => {
  it("should work", () => {
    const list = new LinkedListNode(
      1,
      new LinkedListNode(
        4,
        new LinkedListNode(
          3,
          new LinkedListNode(2, new LinkedListNode(5, new LinkedListNode(3))),
        ),
      ),
    )

    expect(partitionList(list, 3)).toMatchInlineSnapshot(`
LinkedListNode {
  "data": 1,
  "next": LinkedListNode {
    "data": 2,
    "next": LinkedListNode {
      "data": 4,
      "next": LinkedListNode {
        "data": 3,
        "next": LinkedListNode {
          "data": 5,
          "next": LinkedListNode {
            "data": 3,
            "next": null,
          },
        },
      },
    },
  },
}
`)
  })
})
