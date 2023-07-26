class MyCircularQueue {
  queue: number[] = []
  start: number = -1
  end: number = -1
  k: number = -1

  constructor(k: number) {
    this.k = k
    this.queue = Array(k).fill(-1)
    this.start = 0
    this.end = 0
  }

  /** Insert an element into the circular queue. Return true if the operation is successful. */
  enQueue(value: number) {
    if (this.end === this.start && this.queue[this.end] !== -1) {
      return false
    }
    this.queue[this.end++] = value
    if (this.end === this.k) {
      this.end = 0
    }
    return true
  }

  /** Delete an element from the circular queue. Return true if the operation is successful. */
  deQueue() {
    if (this.queue[this.start] === -1) {
      return false
    }
    this.queue[this.start++] = -1
    if (this.start === this.k) {
      this.start = 0
    }
    return true
  }

  /** Get the front item from the queue. */
  Front() {
    return this.queue[this.start]
  }

  /** Get the last item from the queue. */
  Rear() {
    return this.end === 0 ? this.queue[this.k - 1] : this.queue[this.end - 1]
  }

  /** Checks whether the circular queue is empty or not. */
  isEmpty() {
    return this.start === this.end && this.queue[this.end] === -1
  }

  /** Checks whether the circular queue is full or not. */
  isFull() {
    return this.start == this.end && this.queue[this.end] !== -1
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
