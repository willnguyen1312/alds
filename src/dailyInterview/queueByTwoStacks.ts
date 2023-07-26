/*
Hi, here's your problem today. This problem was recently asked by Apple:

Implement a queue class using two stacks.
A queue is a data structure that supports the FIFO protocol (First in = first out).
Your class should support the enqueue and dequeue methods like a standard queue.
*/

export class Queue {
  inStack: number[] = []
  outStack: number[] = []

  enQueue(value: number) {
    this.inStack.push(value)
  }

  deQueue() {
    while (this.inStack.length) {
      this.outStack.push(this.inStack.pop())
    }

    return this.outStack.pop()
  }
}
