function sameBsts(arrayOne: number[], arrayTwo: number[]): boolean {
  if (arrayOne.length !== arrayTwo.length) return false
  if (arrayOne.length === 0 && arrayTwo.length === 0) return true
  if (arrayOne[0] !== arrayTwo[0]) return false

  const leftOne = getSmaller(arrayOne)
  const leftTwo = getSmaller(arrayTwo)
  const rightOne = getBiggerOrEqual(arrayOne)
  const rightTwo = getBiggerOrEqual(arrayTwo)

  return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo)
}

function getSmaller(array: number[]) {
  const smaller: number[] = []
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[0]) smaller.push(array[i])
  }
  return smaller
}

function getBiggerOrEqual(array: number[]) {
  const biggerOrEqual: number[] = []
  for (let i = 1; i < array.length; i++) {
    if (array[i] >= array[0]) biggerOrEqual.push(array[i])
  }

  return biggerOrEqual
}

function sameBsts2(arrayOne: number[], arrayTwo: number[]) {
  return areSameBsts2(arrayOne, arrayTwo, 0, 0, -Infinity, Infinity)
}

function areSameBsts2(
  arrayOne: number[],
  arrayTwo: number[],
  rootIdxOne: number,
  rootIdxTwo: number,
  minVal: number,
  maxVal: number,
): boolean {
  if (rootIdxOne === -1 || rootIdxTwo === -1) return rootIdxOne === rootIdxTwo

  if (arrayOne[rootIdxOne] !== arrayTwo[rootIdxTwo]) return false

  const leftRootIdxOne = getIdxOfFirstSmaller(arrayOne, rootIdxOne, minVal)
  const leftRootIdxTwo = getIdxOfFirstSmaller(arrayTwo, rootIdxTwo, minVal)
  const rightRootIdxOne = getIdxOfFirstBiggerOrEqual(
    arrayOne,
    rootIdxOne,
    maxVal,
  )
  const rightRootIdxTwo = getIdxOfFirstBiggerOrEqual(
    arrayTwo,
    rootIdxTwo,
    maxVal,
  )

  const currentValue = arrayOne[rootIdxOne]
  const leftAreSame = areSameBsts2(
    arrayOne,
    arrayTwo,
    leftRootIdxOne,
    leftRootIdxTwo,
    minVal,
    currentValue,
  )
  const rightAreSame = areSameBsts2(
    arrayOne,
    arrayTwo,
    rightRootIdxOne,
    rightRootIdxTwo,
    currentValue,
    maxVal,
  )

  return leftAreSame && rightAreSame
}

function getIdxOfFirstSmaller(
  array: number[],
  startingIdx: number,
  minVal: number,
) {
  // Find the index of the first smaller value after the startingIdx.
  // Make sure that this value is greater than or equal to the minVal,
  // which is the value of the previous parent node in the BST. If it
  // isn't, then that value is located in the left subtree of the
  // previous parent node.
  for (let i = startingIdx + 1; i < array.length; i++) {
    if (array[i] < array[startingIdx] && array[i] >= minVal) return i
  }
  return -1
}

function getIdxOfFirstBiggerOrEqual(
  array: number[],
  startingIdx: number,
  maxVal: number,
) {
  // Find the index of the first bigger/equal value after the startingIdx.
  // Make sure that this value is smaller than maxVal, which is the value
  // of the previous parent node in the BST. If it isn't, then that value
  // is located in the right subtree of the previous parent node.
  for (let i = startingIdx + 1; i < array.length; i++) {
    if (array[i] >= array[startingIdx] && array[i] < maxVal) return i
  }
  return -1
}
