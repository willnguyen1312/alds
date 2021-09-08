import {
  LinkedListNode,
  removeDuplicateUnsortedLinkedList,
  removeDuplicateUnsortedLinkedList2,
} from './removeDuplicateUnsortedLinkedList';

describe('removeDuplicateUnsortedLinkedList function', () => {
  it('should work', () => {
    const node = new LinkedListNode(
      1,
      new LinkedListNode(
        2,
        new LinkedListNode(3, new LinkedListNode(3, new LinkedListNode(4)))
      )
    );
    const actual = removeDuplicateUnsortedLinkedList(node);
    expect(actual).toMatchInlineSnapshot(`
LinkedListNode {
  "data": 1,
  "next": LinkedListNode {
    "data": 2,
    "next": LinkedListNode {
      "data": 3,
      "next": LinkedListNode {
        "data": 4,
        "next": undefined,
      },
    },
  },
}
`);

    const node2 = new LinkedListNode(
      1,
      new LinkedListNode(
        2,
        new LinkedListNode(3, new LinkedListNode(3, new LinkedListNode(4)))
      )
    );

    const actual2 = removeDuplicateUnsortedLinkedList2(node2);
    expect(actual2).toMatchInlineSnapshot(`
LinkedListNode {
  "data": 1,
  "next": LinkedListNode {
    "data": 2,
    "next": LinkedListNode {
      "data": 4,
      "next": undefined,
    },
  },
}
`);
  });
});
