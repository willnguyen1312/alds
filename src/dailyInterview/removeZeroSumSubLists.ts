/*
Hi, here's your problem today. This problem was recently asked by Uber:

Given a linked list of integers, remove all consecutive nodes that sum up to 0.

Example:
Input: 10 -> 5 -> -3 -> -3 -> 1 -> 4 -> -4
Output: 10

The consecutive nodes 5 -> -3 -> -3 -> 1 sums up to 0 so that sequence should be removed.
4 -> -4 also sums up to 0 too so that sequence should also be removed.
*/

export class LinkedListNode {
  val: number;
  next: null | LinkedListNode = null;
  constructor(val: number) {
    this.val = val;
  }
}

export function removeZeroSumSubLists(head: LinkedListNode) {
  const map: Map<number, LinkedListNode> = new Map();
  let sum = 0;
  let currentNode = head;

  while (currentNode) {
    sum += currentNode.val;
    map.set(sum, currentNode);
    currentNode = currentNode.next;
  }

  const dummyHead = new LinkedListNode(0);
  dummyHead.next = head;
  currentNode = dummyHead;
  sum = 0;

  while (currentNode) {
    sum += currentNode.val;
    const sumNode = map.get(sum);

    if (sumNode && sumNode !== currentNode) {
      currentNode.next = map.get(sum).next;
      map.delete(sum);
    }

    currentNode = currentNode.next;
  }

  return dummyHead.next;
}
