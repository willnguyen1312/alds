export function checkIfExist(arr: number[]): boolean {
  const numSet = new Set<number>()

  for (const num of arr) {
    if (numSet.has(num / 2)) {
      return true
    }

    if (numSet.has(num * 2)) {
      return true
    }
    numSet.add(num)
  }

  return false
}
