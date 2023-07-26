import { palindromePartition } from "./palindromePartition"

describe("palindromePartition function", () => {
  it("should work", () => {
    expect(palindromePartition("aab")).toEqual([
      ["a", "a", "b"],
      ["aa", "b"],
    ])
  })
})
