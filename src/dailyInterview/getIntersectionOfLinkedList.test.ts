import {
  LinkedListNode,
  getIntersectionOfLinkedList,
} from './getIntersectionOfLinkedList';

describe('getIntersectionOfLinkedList function', () => {
  it('should work', () => {
    const a = new LinkedListNode(1);
    a.next = new LinkedListNode(2);
    a.next.next = new LinkedListNode(3);
    a.next.next.next = new LinkedListNode(4);

    const b = new LinkedListNode(6);
    b.next = a.next.next;

    expect(getIntersectionOfLinkedList(a, b)).toMatchInlineSnapshot(`
LinkedListNode {
  "next": LinkedListNode {
    "next": null,
    "val": 4,
  },
  "val": 3,
}
`);
  });
});
