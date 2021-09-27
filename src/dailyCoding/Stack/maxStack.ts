/*
Hi, here's your problem today. This problem was recently asked by Twitter:

Implement a class for a stack that supports all the regular functions (push, pop)
and an additional function of max()
which returns the maximum element in the stack (return None if the stack is empty)
Each method should run in constant time.
*/

export class MaxStack {
  maxStack: number[] = [];
  valueStack: number[] = [];

  push(value: number) {
    this.valueStack.push(value);

    if (this.maxStack.length === 0 || value >= this.max()) {
      this.maxStack.push(value);
    }
  }

  pop() {
    if (this.valueStack.length === 0) return;

    const value = this.valueStack.pop();

    if (value === this.max()) {
      this.maxStack.pop();
    }

    return value;
  }

  max() {
    if (this.maxStack.length === 0) return;

    return this.maxStack[this.maxStack.length - 1];
  }
}
