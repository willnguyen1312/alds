/*
Hi, here's your problem today. This problem was recently asked by Apple:

Given an array of numbers, determine whether it can be partitioned into 3 arrays of equal sums.

For instance,
[0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1] can be partitioned into:
[0, 2, 1], [-6, 6, -7, 9, 1], [2, 0, 1] all of which sum to 3.
*/

import { splitEqualSums } from "./splitEqualSums"

describe("splitEqualSums function", () => {
  it("should work", () => {
    const actual = splitEqualSums([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])
    expect(actual).toBe(true)
  })
})
