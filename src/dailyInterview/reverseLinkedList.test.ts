import {
  reverseLinkedListRecur,
  reverseLinkedListIter,
  LinkedListNode,
} from './reverseLinkedList';

describe('reverseLinkedListRecur function', () => {
  it('should work', () => {
    const headNode = new LinkedListNode(1);
    headNode.next = new LinkedListNode(2);
    headNode.next.next = new LinkedListNode(3);

    expect(reverseLinkedListRecur(headNode)).toMatchInlineSnapshot(`
LinkedListNode {
  "next": LinkedListNode {
    "next": LinkedListNode {
      "next": null,
      "val": 1,
    },
    "val": 2,
  },
  "val": 3,
}
`);
  });
});

describe('reverseLinkedListIter function', () => {
  it('should work', () => {
    const headNode = new LinkedListNode(1);
    headNode.next = new LinkedListNode(2);
    headNode.next.next = new LinkedListNode(3);

    expect(reverseLinkedListIter(headNode)).toMatchInlineSnapshot(`
LinkedListNode {
  "next": LinkedListNode {
    "next": LinkedListNode {
      "next": null,
      "val": 1,
    },
    "val": 2,
  },
  "val": 3,
}
`);
  });
});
