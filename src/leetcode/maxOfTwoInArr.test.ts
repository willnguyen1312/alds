function maxOfTwoInArr(nums: number[]): [number, number] {
  let m1 = 0,
    m2 = 0
  for (const val of nums) {
    m2 = Math.max(m2, Math.min(m1, val))
    m1 = Math.max(m1, val)
  }
  return [m1, m2]
}

describe("maxOfTwoInArr", () => {
  it("should return max of two in arr", () => {
    expect(maxOfTwoInArr([3, 2, 1, 5, 6, 4])).toEqual([6, 5])
    expect(maxOfTwoInArr([3, 2, 1])).toEqual([3, 2])
    expect(maxOfTwoInArr([3, 2, 1, 5, 6, 4, 7])).toEqual([7, 6])
    expect(maxOfTwoInArr([3, 2, 1, 5, 6, 4, 7, 8])).toEqual([8, 7])
  })
})
