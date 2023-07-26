export class QueueStack {
  private internalQueue: number[] = []

  push(val: number) {
    const size = this.internalQueue.length
    this.internalQueue.push(val)

    for (let i = 0; i < size; i++) {
      let x = this.internalQueue[0]
      this.internalQueue.push(x)
      this.internalQueue.shift()
    }
  }

  pop() {
    if (this.isEmpty()) {
      return -1
    }

    return this.internalQueue.shift()
  }

  top() {
    if (this.isEmpty()) return -1
    return this.internalQueue[0]
  }

  isEmpty() {
    if (this.internalQueue.length === 0) return true
    return false
  }
}
