function findClosestElements(arr: number[], k: number, x: number): number[] {
    // sort the arr based on x
    arr.sort((num1, num2) => Math.abs(num1 - x) - Math.abs(num2 - x))

    // take only k elements
    return arr.slice(0, k).sort((a, b) => a - b)
};


describe("findClosestElements", () => {
    it("Example 1", () => {
        const arr = [1, 2, 3, 4, 5]
        const k = 4
        const x = 3
        const output = [1, 2, 3, 4]
        expect(findClosestElements(arr, k, x)).toEqual(output)
    })

    it("Example 2", () => {
        const arr = [1, 2, 3, 4, 5]
        const k = 4
        const x = -1
        const output = [1, 2, 3, 4]
        expect(findClosestElements(arr, k, x)).toEqual(output)
    })

    it("Example 3", () => {
        const arr = [1, 2, 3, 4, 5]
        const k = 4
        const x = 6
        const output = [2, 3, 4, 5]
        expect(findClosestElements(arr, k, x)).toEqual(output)
    })

    it("Example 4", () => {
        const arr = [1, 1, 1, 10, 10, 10]
        const k = 1
        const x = 9
        const output = [10]
        expect(findClosestElements(arr, k, x)).toEqual(output)
    })

    it("Example 5", () => {
        const arr = [0, 0, 1, 2, 3, 3, 4, 7, 7, 8]
        const k = 3
        const x = 5
        const output = [3, 3, 4]
        expect(findClosestElements(arr, k, x)).toEqual(output)
    })
})