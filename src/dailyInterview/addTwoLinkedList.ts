/*

Hi, here's your problem today. This problem was recently asked by Microsoft:

You are given two linked-lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/

export class LinkedListNode {
  val: number;
  next: null | LinkedListNode = null;
  constructor(val: number) {
    this.val = val;
  }
}

export function reverseLinkedListIter(node: null | LinkedListNode) {
  let prev = null;
  let current: null | LinkedListNode = node;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  node = prev;
  return node;
}

export function reverseLinkedList(node: LinkedListNode) {
  return reverseFromHead(node, null);
}

export function reverseFromHead(head: null | LinkedListNode, tail: null | LinkedListNode): LinkedListNode | null {
  if (head === null) return tail;
  const nextNode = head.next;
  head.next = tail;
  return reverseFromHead(nextNode, head);
}

export function addTwoLinkedList(l1: LinkedListNode | null, l2: LinkedListNode | null) {
  let list = new LinkedListNode(0);
  let currentNode = list;

  let sum = 0;
  let carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    sum = sum % 10;

    currentNode.next = new LinkedListNode(sum);
    currentNode = currentNode.next;

    sum = carry;
    carry = 0;
  }

  return list.next;
}
