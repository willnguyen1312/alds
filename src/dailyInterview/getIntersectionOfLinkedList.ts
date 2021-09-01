/*
Hi, here's your problem today. This problem was recently asked by Apple:

You are given two singly linked lists. The lists intersect at some node. Find, and return the node. Note: the lists are non-cyclical.

Example:

A = 1 -> 2 -> 3 -> 4
B = 6 -> 3 -> 4 

This should return 3 (you may assume that any nodes with the same value are the same node).
*/

export class LinkedListNode {
  val: number;
  next: null | LinkedListNode = null;
  constructor(val: number) {
    this.val = val;
  }
}

export function getIntersectionOfLinkedList(
  nodeA: LinkedListNode,
  nodeB: LinkedListNode
) {
  let headA = nodeA;
  let headB = nodeB;

  while (headA !== headB) {
    headA = headA ? headA.next : nodeB;
    headB = headB ? headB.next : nodeA;
  }

  return headA;
}
