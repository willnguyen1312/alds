/*
Hi, here's your problem today. This problem was recently asked by Amazon:

Given two arrays, write a function to compute their intersection
the intersection means the numbers that are in both arrays.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:
Each element in the result must be unique.
The result can be in any order.
*/

export function computeArrayIntersection(
  first: number[],
  second: number[],
): number[] {
  const firstSet = new Set(first)
  const foundSet: Set<number> = new Set()

  const result = second.reduce((acc: number[], cur) => {
    if (!foundSet.has(cur) && firstSet.has(cur)) {
      acc.push(cur)
      foundSet.add(cur)
    }

    return acc
  }, [])

  return result
}
