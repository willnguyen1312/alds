/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

You are given a doubly linked list. Determine if it is a palindrome. 
*/

export class LinkedListNode {
  val: string;
  next?: LinkedListNode;
  prev?: LinkedListNode;
  constructor(val: string) {
    this.val = val;
  }
}

export function checkPalindromeLinkedList(node: LinkedListNode): boolean {
  if (!node) {
    return false;
  }
  let length = 0;
  let current = node;

  while (current) {
    length++;
    current = current.next;
  }

  let middle = Math.floor(length / 2);

  let middleNode: LinkedListNode;

  while (middle) {
    middleNode = middleNode ? middleNode.next : node;
    middle--;
  }

  let left = middleNode;
  let right = middleNode.next;

  while (left && right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.prev;
    right = right.next;
  }

  return true;
}

export function checkPalindromeLinkedList2(node: LinkedListNode): boolean {
  if (!node) {
    return false;
  }

  let length = 0;
  let current = node;

  while (current) {
    length++;
    current = current.next;
  }

  let middle = Math.floor(length / 2);
  const stack: string[] = [];
  let middleNode: LinkedListNode;

  while (middle) {
    middleNode = middleNode ? middleNode.next : node;
    stack.push(middleNode.val);
    middle--;
  }

  middleNode = middleNode.next;

  while (middleNode) {
    if (middleNode.val !== stack.pop()) {
      return false;
    }
    middleNode = middleNode.next;
  }

  return true;
}
