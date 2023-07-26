/*
Hi, here's your problem today. This problem was recently asked by Amazon:

Given an array of size n, and all values in the array are in the range 1 to n,
find all the duplicates.
*/

export function findDuplicates(numbs: number[]): number[] {
  const result: number[] = []
  const numbsMap: Map<number, number> = new Map()

  for (const numb of numbs) {
    numbsMap.set(numb, (numbsMap.get(numb) || 0) + 1)

    if (numbsMap.get(numb) > 1) {
      result.push(numb)
    }
  }

  return result
}
