import {
  LinkedListNode,
  checkCycleLinkedList,
  countCycle,
} from './checkCycleLinkedList';

describe('checkCycleLinkedList function', () => {
  it('should work', () => {
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2);
    const node3 = new LinkedListNode(3);
    const node4 = new LinkedListNode(4);
    const node5 = new LinkedListNode(5);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    node5.next = node2;

    expect(checkCycleLinkedList(node1)).toBe(true);

    expect(countCycle(node1)).toBe(4);
  });
});
