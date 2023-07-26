/*
Hi, here's your problem today. This problem was recently asked by Twitter:

You are given an array of k sorted singly linked lists.
Merge the linked lists into a single sorted linked list and return it.
*/

export class LinkedListNode {
  val: number
  next: null | LinkedListNode = null
  constructor(val: number, next: LinkedListNode | null = null) {
    this.val = val
    this.next = next
  }
}

export function mergeSortedLinkedListIter(
  first: LinkedListNode,
  second: LinkedListNode,
) {
  const dumpNode = new LinkedListNode(0)
  let cur = dumpNode

  while (first || second) {
    if (!first) {
      while (second) {
        cur.next = new LinkedListNode(second.val)
        second = second.next
        cur = cur.next
      }
      break
    }

    if (!second) {
      while (first) {
        cur.next = new LinkedListNode(first.val)
        second = first.next
        cur = cur.next
      }
      break
    }

    if (first.val <= second.val) {
      cur.next = new LinkedListNode(first.val)
      first = first.next
    } else {
      cur.next = new LinkedListNode(second.val)
      second = second.next
    }

    cur = cur.next
  }

  return dumpNode.next
}

export function mergeSortedLinkedListRecur(
  first: LinkedListNode,
  second: LinkedListNode,
) {
  if (!first) return second
  if (!second) return first
  let head = null

  if (first.val <= second.val) {
    head = first
    head.next = mergeSortedLinkedListRecur(first.next, second)
  } else {
    head = second
    head.next = mergeSortedLinkedListRecur(first, second.next)
  }

  return head
}
