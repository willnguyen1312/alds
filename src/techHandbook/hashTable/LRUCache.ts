// https://leetcode.com/problems/lru-cache/
class LinkedListNode {
  key: number;
  val: number;
  prev: LinkedListNode;
  next: LinkedListNode;
  constructor(key: number, value: number) {
    this.key = key;
    this.val = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  head: LinkedListNode;
  tail: LinkedListNode;
  size: number;
  constructor() {
    this.head = new LinkedListNode(0, 0);
    this.tail = new LinkedListNode(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.size = 0;
  }

  add(node: LinkedListNode) {
    //make sure adding to right before tail;
    node.next = this.tail;
    node.prev = this.tail.prev;

    this.tail.prev.next = node;
    this.tail.prev = node;
    this.size++;
  }

  remove(node: LinkedListNode) {
    let next = node.next;
    let prev = node.prev;

    prev.next = next;
    next.prev = prev;
    this.size--;
  }
}

export class LRUCache {
  capacity: number;
  dll: DoubleLinkedList;
  map: Record<number, LinkedListNode>;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = {};
    this.dll = new DoubleLinkedList();
  }

  get(key: number) {
    if (this.map[key]) {
      let node = this.map[key];
      this.dll.remove(node);
      this.dll.add(node);
      return node.val;
    }

    return -1;
  }

  put(key: number, value: number) {
    let newNode = new LinkedListNode(key, value);
    if (this.map[key]) {
      let oldNode = this.map[key];
      this.dll.remove(oldNode);
    }

    this.dll.add(newNode);
    this.map[key] = newNode;

    if (this.dll.size > this.capacity) {
      //remove the node after head;
      let removeNode = this.dll.head.next;
      this.dll.remove(removeNode);
      delete this.map[removeNode.key];
    }
  }
}
