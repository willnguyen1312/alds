class SparseArray {
  private hash: Record<number, number> = {}
  private size: number = 0

  constructor(arr: number[], size: number) {
    this.size = size

    for (let index = 0; index < arr.length; index++) {
      const element = arr[index]
      this.hash[index] = element
    }
  }

  private checkBound(index: number) {
    if (index < 0 || index >= this.size) {
      return false
    }
    return true
  }

  set(index: number, value: number) {
    if (!this.checkBound(index)) {
      return
    }

    if (value !== 0) {
      this.hash[index] = value
      return
    }

    if (index in this.hash) {
      delete this.hash[index]
    }
  }

  get(index: number) {
    if (this.checkBound(index)) {
      return this.hash[index]
    }
  }
}
