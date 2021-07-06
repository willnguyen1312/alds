class MyQueue {
  stack1: number[] = [];
  stack2: number[] = [];
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(val: number) {
    this.stack1.push(val);
  }

  pop() {
    if (this.stack2.length) {
      return this.stack2.pop();
    } else {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop() as number);
      }
      return this.stack2.pop();
    }
  }

  peek() {
    if (this.stack2.length) return this.stack2[this.stack2.length - 1];
    else {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop() as number);
      }
      return this.stack2[this.stack2.length - 1];
    }
  }

  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}
