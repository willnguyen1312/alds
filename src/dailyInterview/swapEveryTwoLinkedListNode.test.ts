import {
  LinkedListNode,
  swapEveryTwoLinkedListNode,
} from './swapEveryTwoLinkedListNode';

describe('swapEveryTwoLinkedListNode function', () => {
  it('should work', () => {
    const list = new LinkedListNode(
      1,
      new LinkedListNode(
        2,
        new LinkedListNode(3, new LinkedListNode(4, new LinkedListNode(5)))
      )
    );

    expect(swapEveryTwoLinkedListNode(list)).toMatchInlineSnapshot(`
LinkedListNode {
  "data": 2,
  "next": LinkedListNode {
    "data": 1,
    "next": LinkedListNode {
      "data": 4,
      "next": LinkedListNode {
        "data": 3,
        "next": LinkedListNode {
          "data": 5,
          "next": undefined,
        },
      },
    },
  },
}
`);
  });
});
