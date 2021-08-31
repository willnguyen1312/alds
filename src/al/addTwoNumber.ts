function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummy = new ListNode(-1);
  let cur = dummy;
  let sum = 0;
  while (l1 !== null || l2 !== null) {
    sum = Math.floor(sum / 10);

    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    cur.next = new ListNode(sum % 10);
    cur = cur.next;
  }

  if (sum >= 10) {
    cur.next = new ListNode(1);
  }

  return dummy.next;
}
