export class LinkedListNode {
  val: number;
  next?: LinkedListNode;
  constructor(val: number, next?: LinkedListNode) {
    this.val = val;
    this.next = next;
  }
}

export function checkCycleLinkedList(node: LinkedListNode): boolean {
  let tortoise = node;
  let hare = node;

  while (hare.next && hare.next.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;
    if (tortoise === hare) {
      return true;
    }
  }
  return false;
}

export function countCycle(node: LinkedListNode): number {
  let tortoise = node.next;
  let hare = node.next.next;

  while (tortoise !== hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  if (!hare.next) {
    return -1;
  }

  let count = 1;

  tortoise = tortoise.next;
  hare = hare.next.next;

  while (tortoise !== hare) {
    count += 1;
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  return count;
}
