export function powerset(array: number[], idx: number): number[][] {
  if (!idx) {
    idx = array.length - 1
  }

  if (idx < 0) {
    return [[]]
  }

  const ele = array[idx]
  const subsets = powerset(array, idx - 1)
  const length = subsets.length

  for (let i = 0; i < length; i++) {
    const currentSubset = subsets[i]
    subsets.push(currentSubset.concat(ele))
  }

  return subsets
}

export function powerset2(array: number[]): number[][] {
  const subsets: number[][] = [[]]

  for (const ele of array) {
    for (let i = 0; i < subsets.length; i++) {
      const currentSubset = subsets[i]
      subsets.push(currentSubset.concat(ele))
    }
  }

  return subsets
}
