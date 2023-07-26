/*
Hi, here's your problem today. This problem was recently asked by Facebook:

You are given an array of integers. Return all the permutations of this array.
*/

export function getPermutations(numbs: number[]): number[][] {
  const permutations: number[][] = []
  permutationsHelper(numbs, [], permutations)
  return permutations
}

function permutationsHelper(
  numbs: number[],
  currentPermutation: number[],
  permutations: number[][],
) {
  if (!numbs.length && currentPermutation.length) {
    permutations.push(currentPermutation)
  } else {
    for (let i = 0; i < numbs.length; i++) {
      const newArray = numbs.slice(0, i).concat(numbs.slice(i + 1))
      const newPermutation = currentPermutation.concat([numbs[i]])
      permutationsHelper(newArray, newPermutation, permutations)
    }
  }
}
