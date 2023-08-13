function subArraySum(arr: number[], target: number): number {
    const prefixSums = new Map()
    prefixSums.set(0, 1)
    let curSum = 0
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        curSum += arr[i]
        const complement = curSum - target
        if (prefixSums.has(complement)) {
            count += prefixSums.get(complement)
        }

        if (prefixSums.has(curSum)) {
            prefixSums.set(curSum, prefixSums.get(curSum) + 1)
        } else {
            prefixSums.set(curSum, 1)
        }
    }

    return count
};

describe("subArraySum", () => {
    it("should work", () => {
        const actual = subArraySum([1, 1, 1], 2)
        expect(actual).toBe(2)
    })
})