/*
This problem was asked by Microsoft.

Given a number in the form of a list of digits, return all possible permutations.

For example, given [1,2,3], return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

export function simplePermutation(inputArr: number[]): number[][] {
  const result: number[][] = [];

  function permutationsHelper(
    numbs: number[],
    currentPermutation: number[],
    permutations: number[][]
  ) {
    if (numbs.length === 0) {
      permutations.push(currentPermutation);
    } else {
      for (let i = 0; i < numbs.length; i++) {
        const newArray = numbs.slice(0, i).concat(numbs.slice(i + 1));
        const newPermutation = currentPermutation.concat(numbs[i]);
        permutationsHelper(newArray, newPermutation, permutations);
      }
    }
  }

  permutationsHelper(inputArr, [], result);
  return result;
}
