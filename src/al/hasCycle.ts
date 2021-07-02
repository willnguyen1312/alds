class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let slow_p = head,
    fast_p = head;
  let flag = 0;

  while (slow_p !== null && fast_p !== null && fast_p.next !== null) {
    slow_p = slow_p.next;
    fast_p = fast_p.next.next;
    if (slow_p === fast_p) {
      flag = 1;
      break;
    }
  }

  return flag === 1;
}
