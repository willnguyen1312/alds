class NodeItem {
  val: number
  next?: NodeItem | null
  constructor(x: number) {
    this.val = x
  }
}

class MyLinkedList {
  /** Initialize your data structure here. */
  length: number = 0
  head?: NodeItem | null = null

  constructors() {
    this.length = 0
    this.head = null
  }

  get(index: number) {
    if (index < 0 || index >= this.length) {
      return -1
    } else {
      let counter = 0
      let curr = this.head
      while (counter !== index) {
        curr = curr?.next
        counter++
      }
      return curr?.val
    }
  }

  addAtHead(val: number) {
    const newNode = new NodeItem(val)
    newNode.next = this.head
    this.head = newNode
    this.length++
  }

  addAtTail(val: number) {
    if (this.length == 0) {
      this.addAtHead(val)
      return
    }
    const newNode = new NodeItem(val)
    let temp = this.head
    while (temp?.next !== null) {
      temp = temp?.next
    }
    temp.next = newNode
    newNode.next = null
    this.length++
  }

  addAtIndex(index: number, val: number) {
    const newNode = new NodeItem(val)
    let temp = this.head
    let counter = 0
    if (index === this.length) {
      this.addAtTail(val)
      return
    }

    if (index > this.length) {
      return
    }

    if (index == 0) {
      this.addAtHead(val)
      return
    }

    while (counter !== index - 1) {
      temp = temp?.next
      counter++
    }
    newNode.next = temp?.next
    temp!.next = newNode
    this.length++
  }

  deleteAtIndex(index: number) {
    if (index < 0 || index >= this.length) {
      return
    }
    let curr = this.head
    if (index == 0) {
      this.head = curr?.next
    } else {
      let current = this.head
      let pre = null
      let counter = 0
      while (counter !== index) {
        pre = current
        current = current?.next
        counter++
      }
      pre!.next = current?.next
      this.length--
    }
  }
}
