function removeKthNodeFromEnd(head: any, k: number) {
  let counter = 1;
  let first: any = head;
  let second: any = head;

  while (counter <= k) {
    second = second.next;
    counter++;
  }

  if (!second) {
    head.val = head.next.value;
    head.next = head.next.next;
    return;
  }

  while (second.next) {
    second = second.next;
    first = first.next;
  }

  first.next = first.next.next;
}
