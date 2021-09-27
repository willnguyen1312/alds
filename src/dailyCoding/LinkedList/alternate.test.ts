import { LinkedListNode, alternate } from './alternate';

describe('alternate function', () => {
  it('should work', () => {
    const actual = alternate(
      new LinkedListNode(
        1,
        new LinkedListNode(
          2,
          new LinkedListNode(3, new LinkedListNode(4, new LinkedListNode(5)))
        )
      )
    );

    expect(actual).toMatchInlineSnapshot(`
LinkedListNode {
  "next": LinkedListNode {
    "next": LinkedListNode {
      "next": LinkedListNode {
        "next": LinkedListNode {
          "next": undefined,
          "val": 4,
        },
        "val": 5,
      },
      "val": 2,
    },
    "val": 3,
  },
  "val": 1,
}
`);
  });
});
