import { LinkedListNode, mergeSortedLinkedListIter, mergeSortedLinkedListRecur } from './mergeSortedLinkedList';

describe('mergeSortedLinkedList function', () => {
  it('should work', () => {
    const a = new LinkedListNode(1, new LinkedListNode(3, new LinkedListNode(5)));
    const b = new LinkedListNode(2, new LinkedListNode(4, new LinkedListNode(6)));
    const actual = mergeSortedLinkedListIter(a, b);
    expect(actual).toMatchInlineSnapshot(`
LinkedListNode {
  "next": LinkedListNode {
    "next": LinkedListNode {
      "next": LinkedListNode {
        "next": LinkedListNode {
          "next": LinkedListNode {
            "next": null,
            "val": 6,
          },
          "val": 5,
        },
        "val": 4,
      },
      "val": 3,
    },
    "val": 2,
  },
  "val": 1,
}
`);

    expect(mergeSortedLinkedListRecur(a, b)).toMatchInlineSnapshot(`
LinkedListNode {
  "next": LinkedListNode {
    "next": LinkedListNode {
      "next": LinkedListNode {
        "next": LinkedListNode {
          "next": LinkedListNode {
            "next": null,
            "val": 6,
          },
          "val": 5,
        },
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
