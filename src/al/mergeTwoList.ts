function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummy = new ListNode(0);
  let cur = dummy;
  while (l1 !== null || l2 !== null) {
    if (l1 === null) {
      while (l2 !== null) {
        cur.next = new ListNode(l2.val);
        l2 = l2.next;
        cur = cur.next;
      }
      break;
    }

    if (l2 === null) {
      while (l1 !== null) {
        cur.next = new ListNode(l1.val);
        l1 = l1.next;
        cur = cur.next;
      }
      break;
    }

    if (l1.val <= l2.val) {
      cur.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      cur.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    cur = cur.next;
  }
  return dummy.next;
}

function mergeTwoListsRecursive(l1: ListNode, l2: ListNode) {
  if (l2 === null) return l1;
  if (l2 === null) return l1;
  let head = null;

  if (l1.val <= l2.val) {
    head = l1;
    head.next = mergeTwoLists(l1.next, l2);
  } else {
    head = l2;
    head.next = mergeTwoLists(l1, l2.next);
  }

  return head;
}
