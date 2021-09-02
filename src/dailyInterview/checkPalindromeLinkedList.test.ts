import {
  LinkedListNode,
  checkPalindromeLinkedList,
  checkPalindromeLinkedList2,
} from './checkPalindromeLinkedList';

describe('checkPalindromeLinkedList function', () => {
  it('should work', () => {
    const node = new LinkedListNode('a');
    node.next = new LinkedListNode('b');
    node.next.prev = node;
    node.next.next = new LinkedListNode('b');
    node.next.next.prev = node.next;
    node.next.next.next = new LinkedListNode('a');
    node.next.next.next.prev = node.next.next;

    expect(checkPalindromeLinkedList(node)).toBe(true);
    expect(checkPalindromeLinkedList2(node)).toBe(true);

    const node2 = new LinkedListNode('a');
    node2.next = new LinkedListNode('b');
    node2.next.prev = node2;
    node2.next.next = new LinkedListNode('d');
    node2.next.next.prev = node2.next;
    node2.next.next.next = new LinkedListNode('a');
    node2.next.next.next.prev = node2.next.next;

    expect(checkPalindromeLinkedList(node2)).toBe(false);
    expect(checkPalindromeLinkedList2(node2)).toBe(false);
  });
});
