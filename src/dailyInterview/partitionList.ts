/*
Hi, here's your problem today. This problem was recently asked by LinkedIn:

Given a list of numbers and an integer k, partition/sort the list such that
the all numbers less than k occur before k, and all numbers greater than k occur after the number k.
*/

export class LinkedListNode {
  constructor(
    public data?: number,
    public next?: LinkedListNode,
  ) {}
}

export function partitionList(head: LinkedListNode, x: number): LinkedListNode {
  let frontHead = new LinkedListNode()
  let backHead = new LinkedListNode()
  let front = frontHead
  let back = backHead
  let curr = head

  while (curr) {
    if (curr.data < x) {
      front.next = curr
      front = front.next
    } else {
      back.next = curr
      back = back.next
    }
    curr = curr.next
  }

  front.next = backHead.next
  back.next = null

  return frontHead.next
}
