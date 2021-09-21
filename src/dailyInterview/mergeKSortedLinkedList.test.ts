import { LinkedListNode, mergeKLists } from './mergeKSortedLinkedList';

describe('mergeKLists function', () => {
  it('should work', () => {
    const node1 = new LinkedListNode(1, new LinkedListNode(3));
    const node2 = new LinkedListNode(2, new LinkedListNode(4));

    const actual = mergeKLists([node1, node2]);
    expect(actual).toMatchInlineSnapshot(`
LinkedListNode {
  "next": LinkedListNode {
    "next": LinkedListNode {
      "next": LinkedListNode {
        "next": undefined,
        "val": 4,
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
