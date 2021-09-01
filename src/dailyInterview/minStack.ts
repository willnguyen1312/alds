/*
Hi, here's your problem today. This problem was recently asked by Uber:

Design a simple stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

Note: be sure that pop() and top() handle being called on an empty stack.
*/

export class MinStack {
  stack = [];
  minStack = [];

  push(x: number) {
    if (this.stack.length === 0) {
      this.stack.push(x);
      this.minStack.push(x);
    } else {
      this.stack.push(x);
      if (this.getMin() > x) {
        this.minStack.push(x);
      } else {
        this.minStack.push(this.minStack[this.minStack.length - 1]);
      }
    }
  }

  pop() {
    if (this.stack.length === 0) {
      return;
    } else {
      const value = this.stack.pop();

      if (value === this.getMin()) {
        this.minStack.pop();
      }

      return value;
    }
  }

  top() {
    if (this.stack.length === 0) {
      return;
    } else {
      return this.stack[this.stack.length - 1];
    }
  }

  getMin() {
    if (this.minStack.length === 0) {
      return;
    } else {
      return this.minStack[this.minStack.length - 1];
    }
  }
}
