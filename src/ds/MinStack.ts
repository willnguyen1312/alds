class MinStack {
  stack = []
  minStack = []

  push(x: number) {
    if (this.stack.length === 0) {
      this.stack.push(x)
      this.minStack.push(x)
    } else {
      this.stack.push(x)
      if (this.minStack[this.minStack.length - 1] > x) {
        this.minStack.push(x)
      } else {
        this.minStack.push(this.minStack[this.minStack.length - 1])
      }
    }
  }

  pop() {
    if (this.stack.length === 0) {
      //throw exception
      return -1
    } else {
      this.stack.pop()
      this.minStack.pop()
    }
  }

  top() {
    if (this.stack.length === 0) {
      //throw Exception();
      return -1
    } else {
      return this.stack[this.stack.length - 1]
    }
  }

  getMin() {
    if (this.minStack.length === 0) {
      //throw Exception
      return -1
    } else {
      return this.minStack[this.minStack.length - 1]
    }
  }
}
