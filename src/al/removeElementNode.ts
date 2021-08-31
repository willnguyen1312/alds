function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode();
  dummy.next = head;
  let pre = dummy;

  while (pre.next !== null) {
    if (pre.next.val == val) {
      pre.next = pre.next.next;
    } else {
      pre = pre.next;
    }
  }
  return dummy.next;
}

function removeElementsRecursive(head: ListNode | null, val: number): ListNode | null {
  if (head === null) return null;
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
}
