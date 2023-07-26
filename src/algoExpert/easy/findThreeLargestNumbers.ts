function findThreeLargestNumbers(array: number[]): number[] {
  const result: number[] = []
  for (const num of array) {
    updateLargest(result, num)
  }

  return result
}

function updateLargest(arrNumb: number[], num: number): void {
  if (arrNumb[2] === null || num > arrNumb[2]) {
    shiftAndUpdate(arrNumb, num, 2)
  } else if (arrNumb[1] === null || num > arrNumb[1]) {
    shiftAndUpdate(arrNumb, num, 1)
  } else if (arrNumb[0] === null || num > arrNumb[0]) {
    shiftAndUpdate(arrNumb, num, 0)
  }
}

function shiftAndUpdate(array: number[], num: number, idx: number) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num
    } else {
      array[i] = array[i + 1]
    }
  }
}
