export function getPermutations(array: number[]) {
  const permutations: number[][] = [];
  permutationsHelper(array, [], permutations);
  return permutations;
}

function permutationsHelper(
  array: number[],
  currentPermutation: number[],
  permutations: number[][]
) {
  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      const newPermutation = currentPermutation.concat([array[i]]);
      permutationsHelper(newArray, newPermutation, permutations);
    }
  }
}

export function getPermutations2(array: number[]) {
  const permutations: number[][] = [];
  permutationsHelper2(0, array, permutations);
  return permutations;
}

function permutationsHelper2(
  i: number,
  array: number[],
  permutations: number[][]
) {
  if (i === array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      [array[i], array[j]] = [array[j], array[i]];
      permutationsHelper2(i + 1, array, permutations);
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
