// Given three integer arrays, nums1, nums2, and nums3, sorted in ascending order,
// return a list containing all integers that are common to all three arrays.
// Note: There are no duplicate values in any of the arrays.

// Ex: Given the following nums1, nums2, and nums3…

// nums1 = [1, 2, 3], nums2 = [1, 2], nums3 = [1], return [1].
// Ex: Given the following nums1, nums2, and nums3…

// nums1 = [4, 5, 6], nums2 = [7, 8, 9], nums3 = [10], return [].

export function sameValues(numbs: number[][]): number[] {
  const length = numbs.length;
  const result: number[] = [];
  const mergedNumbs = numbs.reduce((acc, curr) => acc.concat(curr), []).sort();

  let i = 0;

  while (i < mergedNumbs.length) {
    if (
      mergedNumbs[i] === mergedNumbs[i + 1] &&
      mergedNumbs[i] === mergedNumbs[i + 2]
    ) {
      result.push(mergedNumbs[i]);
    }

    i += 2;
  }

  return result;
}
