const nextGreaterElement = function (n: number): number {
  let arr = Array.from(`${n}`, Number)
  let max = -Infinity,
    idx = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < max) {
      idx = i
      break
    }
    max = Math.max(max, arr[i])
  }
  if (idx === -1) return -1
  let secondHalf = arr.splice(idx + 1).sort((a, b) => a - b)
  for (let i = 0; i < secondHalf.length; i++)
    if (secondHalf[i] > arr[idx]) {
      ;[arr[idx], secondHalf[i]] = [secondHalf[i], arr[idx]]
      break
    }
  let result = +arr.concat(secondHalf).join("")
  let max32BitInt = 2147483647
  return result > max32BitInt ? -1 : result
}

describe("next greater element", () => {
  it("case 1", () => {
    const n = 12
    const output = 21
    expect(nextGreaterElement(n)).toBe(output)
  })
})
