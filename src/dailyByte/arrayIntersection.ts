/*
This question is asked by Google. Given two integer arrays, return their intersection. 
Note: the intersection is the set of elements that are common to both arrays. 

Ex: Given the following arrays...

nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []
*/

export function arrayIntersection(first: number[], second: number[]): number[] {
  const firstSet = new Set(first);
  const result: number[] = [];

  for (const numb of second) {
    if (firstSet.has(numb)) {
      result.push(numb);
    }
  }

  return result;
}
