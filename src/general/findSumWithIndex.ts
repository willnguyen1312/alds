export function findSumWithIndex1(arr: number[], sum: number) {
  let mapIndex: any = {}
  let arrSmall: number[] = []
  let arrLarge: number[] = []
  let average = Math.round(sum / 2)
  let result: number[] = []
  for (const [index, value] of arr.entries()) {
    mapIndex[value] = index
    if (value < average) {
      arrSmall.push(value)
    } else {
      arrLarge.push(value)
    }
  }

  for (let i = 0; i < arrSmall.length; i++) {
    for (let j = 0; j < arrLarge.length; j++) {
      const a = arrSmall[i]
      const b = arrLarge[j]
      const aIndex = mapIndex[a]
      const bIndex = mapIndex[b]

      const [aResult, bResult] = result
      const aResultIndex = mapIndex[aResult]
      const bResultIndex = mapIndex[bResult]

      if (a + b === sum && !aResult && !bResult) {
        result = [a, b]
      } else if (
        aResult &&
        bResult &&
        a + b === sum &&
        Math.max(aIndex, bIndex) > Math.max(aResultIndex, bResultIndex)
      ) {
        result = [a, b]
      }
    }
  }
  return result
}

function checkSameIndexes(first: number[], second: number[]) {
  return first[0] === second[1] && first[1] === second[0]
}

// O(n)
export function findSumWithIndex2(arr: number[], sum: number): number[] {
  let result: number[] = [-1, -1]
  const mapIndex: Record<number, number> = {}

  arr.forEach((value, index) => {
    mapIndex[value] = index
  })

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]
    const remainder = sum - element

    if (
      mapIndex[remainder] &&
      !checkSameIndexes(result, [element, remainder])
    ) {
      const isLarger = result[0] + result[1] < index + mapIndex[remainder]
      result = isLarger ? [index, mapIndex[remainder]] : result
    }
  }

  return result
}
