import { addTwoLinkedList, reverseLinkedList, reverseLinkedListIter, LinkedListNode } from './addTwoLinkedList';

describe('addTwoLinkedList', () => {
  it('should reverseLinkedList correctly', () => {
    const headNode = new LinkedListNode(1);
    headNode.next = new LinkedListNode(2);
    headNode.next.next = new LinkedListNode(3);

    const result = reverseLinkedList(headNode);
    expect(result).toMatchInlineSnapshot(`
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

  it('should reverseLinkedList correctly', () => {
    const headNode = new LinkedListNode(4);
    headNode.next = new LinkedListNode(5);
    headNode.next.next = new LinkedListNode(6);

    const result = reverseLinkedListIter(headNode);
    expect(result).toMatchInlineSnapshot(`
      LinkedListNode {
        "next": LinkedListNode {
          "next": LinkedListNode {
            "next": null,
            "val": 4,
          },
          "val": 5,
        },
        "val": 6,
      }
    `);
  });

  it('should addTwoLinkedList correctly', () => {
    const first = new LinkedListNode(2);
    first.next = new LinkedListNode(4);
    first.next.next = new LinkedListNode(3);

    const second = new LinkedListNode(5);
    second.next = new LinkedListNode(6);
    second.next.next = new LinkedListNode(4);

    const result = addTwoLinkedList(first, second);
    expect(result).toMatchInlineSnapshot(`
      LinkedListNode {
        "next": LinkedListNode {
          "next": LinkedListNode {
            "next": null,
            "val": 8,
          },
          "val": 0,
        },
        "val": 7,
      }
    `);
  });
});
