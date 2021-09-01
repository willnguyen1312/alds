import {
  LinkedListNode,
  removeKthElementFromLinkedList,
} from './removeKthElementFromLinkedList';

describe('removeKthElementFromLinkedList function', () => {
  it('should work', () => {
    const head = new LinkedListNode(1);
    head.next = new LinkedListNode(2);
    head.next.next = new LinkedListNode(3);
    head.next.next.next = new LinkedListNode(4);
    head.next.next.next.next = new LinkedListNode(5);

    expect(removeKthElementFromLinkedList(head, 2)).toMatchInlineSnapshot(`
LinkedListNode {
  "next": LinkedListNode {
    "next": LinkedListNode {
      "next": LinkedListNode {
        "next": null,
        "val": 5,
      },
      "val": 3,
    },
    "val": 2,
  },
  "val": 1,
}
`);
  });
});
