class MyStack {
  inQueue: number[] = [];
  outQueue: number[] = [];

  // Push element x onto stack.
  push(x: number) {
    this.inQueue.push(x);
  }

  // Removes the element on top of the stack.
  pop() {
    while (this.inQueue.length > 1) {
      this.outQueue.push(this.inQueue.shift() as number);
    }

    const lastItem = this.inQueue.shift();

    [this.inQueue, this.outQueue] = [this.outQueue, this.inQueue];

    return lastItem;
  }

  // Get the top element.
  top() {
    while (this.inQueue.length > 1) {
      this.outQueue.push(this.inQueue.shift() as number);
    }
    // peak
    const lastItem = this.inQueue[0];

    this.outQueue.push(this.inQueue.shift() as number);
    [this.inQueue, this.outQueue] = [this.outQueue, this.inQueue];

    return lastItem;
  }

  // Return whether the stack is empty.
  empty() {
    return this.inQueue.length === 0;
  }
}
