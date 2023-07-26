import { sortArrayByParity } from "./sortArrayByParity"

describe("sortArrayByParity", () => {
  it("should work for the first case", () => {
    expect(sortArrayByParity([3, 1, 2, 4])).toEqual([2, 4, 1, 3])
  })
})
