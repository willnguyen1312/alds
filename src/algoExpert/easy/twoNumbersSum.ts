export function twoNumbersSum(arrNums: number[], target: number): number[] {
  const cache = new Map<number, boolean>()

  for (const number of arrNums) {
    const remainderInCache = cache.get(target - number)
    if (remainderInCache) {
      return [target - number, number]
    }

    cache.set(number, true)
  }

  return []
}

export function twoNumbersSum2(arrNums: number[], target: number): number[] {
  const sortedArr = arrNums.sort((a, b) => a - b)
  let left = 0
  let right = sortedArr.length - 1

  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right]
    if (sum === target) {
      return [sortedArr[left], sortedArr[right]]
    }

    if (sum < target) {
      left++
    } else {
      right--
    }
  }

  return []
}

export function twoNumbersSum3(arrNums: number[], target: number): number[] {
  for (let index = 0; index < arrNums.length; index++) {
    const num1 = arrNums[index]

    for (let jndex = index + 1; jndex < arrNums.length; jndex++) {
      const num2 = arrNums[jndex]
      if (num1 + num2 === target) {
        return [num1, num2]
      }
    }
  }

  return []
}
