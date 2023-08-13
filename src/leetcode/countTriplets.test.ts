// Function to count such triplets
function countTriplets(arr: number[], target) {
  arr.sort((a, b) => a - b) // Sort the array
  const length = arr.length
  let count = 0

  // Fix one number and use two pointers to find
  // the other two numbers whose product is equal to m
  for (let i = 0; i < length - 2; i++) {
    let left = i + 1,
      right = length - 1
    while (left < right) {
      if (arr[i] * arr[left] * arr[right] === target) {
        count++
        left++
        right--
      } else if (arr[i] * arr[left] * arr[right] < target) left++
      else right--
    }
  }

  return count
}

describe("countTriplets", () => {
  it("should return 2", () => {
    const arr = [1, 4, 6, 2, 3, 8]
    const target = 24
    const result = countTriplets(arr, target)
    expect(result).toBe(3)
  })
})
