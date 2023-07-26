function rightSmallerThan(array: number[]) {
  if (array.length === 0) return []
  const rightSmallerCounts = array.slice()
  const lastIdx = array.length - 1
  const bst = new SpecialBST2(array[lastIdx])
  rightSmallerCounts[lastIdx] = 0
  for (let i = array.length - 2; i >= 0; i--) {
    bst.insert(array[i], i, rightSmallerCounts)
  }
  return rightSmallerCounts
}

class SpecialBST2 {
  value: number
  leftSubTreeSize: number
  left: SpecialBST2 | null
  right: SpecialBST2 | null
  constructor(value: number) {
    this.value = value
    this.leftSubTreeSize = 0
    this.left = null
    this.right = null
  }

  insert(
    value: number,
    idx: number,
    rightSmallerCounts: number[],
    numSmallerAtInsertTime = 0,
  ) {
    if (value < this.value) {
      this.leftSubTreeSize++
      if (this.left === null) {
        this.left = new SpecialBST2(value)
        rightSmallerCounts[idx] = numSmallerAtInsertTime
      } else {
        this.left.insert(value, idx, rightSmallerCounts, numSmallerAtInsertTime)
      }
    } else {
      numSmallerAtInsertTime += this.leftSubTreeSize
      if (value > this.value) numSmallerAtInsertTime++
      if (this.right === null) {
        this.right = new SpecialBST2(value)
        rightSmallerCounts[idx] = numSmallerAtInsertTime
      } else {
        this.right.insert(
          value,
          idx,
          rightSmallerCounts,
          numSmallerAtInsertTime,
        )
      }
    }
  }
}

function rightSmallerThan2(array: number[]) {
  if (array.length === 0) return []

  const lastIdx = array.length - 1
  const bst = new SpecialBST(array[lastIdx], lastIdx, 0)
  for (let i = array.length - 2; i >= 0; i--) {
    bst.insert(array[i], i)
  }
  const rightSmallerCounts = array.slice()
  getRightSmallerCounts(bst, rightSmallerCounts)
  return rightSmallerCounts
}

function getRightSmallerCounts(bst: SpecialBST, rightSmallerCounts: number[]) {
  rightSmallerCounts[bst.idx] = bst.numSmallerAtInsertTime
  bst.left && getRightSmallerCounts(bst.left, rightSmallerCounts)
  bst.right && getRightSmallerCounts(bst.right, rightSmallerCounts)
}

class SpecialBST {
  value: number
  idx: number
  numSmallerAtInsertTime: number
  leftSubtreeSize: number
  left: SpecialBST | null
  right: SpecialBST | null
  constructor(value: number, idx: number, numSmallerAtInsertTime: number) {
    this.value = value
    this.idx = idx
    this.numSmallerAtInsertTime = numSmallerAtInsertTime
    this.leftSubtreeSize = 0
    this.left = null
    this.right = null
  }

  insert(value: number, idx: number, numSmallerAtInsertTime = 0) {
    if (value < this.value) {
      this.leftSubtreeSize++
      if (this.left === null) {
        this.left = new SpecialBST(value, idx, numSmallerAtInsertTime)
      } else {
        this.left.insert(value, idx, numSmallerAtInsertTime)
      }
    } else {
      numSmallerAtInsertTime += this.leftSubtreeSize
      if (value > this.value) numSmallerAtInsertTime++
      if (this.right === null) {
        this.right = new SpecialBST(value, idx, numSmallerAtInsertTime)
      } else {
        this.right.insert(value, idx, numSmallerAtInsertTime)
      }
    }
  }
}
