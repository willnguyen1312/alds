function reverseList(head: ListNode) {
  return revert(head, null);
}

function revert(head: ListNode, tail: ListNode | null): any {
  if (head === null) return tail;
  let next: any = head.next;
  head.next = tail;
  return revert(next, head);
}
