function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const size = pushed.length;
    const stack = [];
    for (let i = 0, j = 0; i < size; i++) {
        stack.push(pushed[i]);
        while (stack.length && j < size && stack[stack.length - 1] === popped[j]) {
            stack.pop();
            j++;
        }
    }
    return stack.length === 0;
};

describe("validateStackSequences", () => {
    it("example 1", () => {
        expect(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])).toBe(true);
    })
    it("example 2", () => {
        expect(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])).toBe(false);
    })
    it("example 3", () => {
        expect(validateStackSequences([2, 1, 0], [1, 2, 0])).toBe(true);
    })
})