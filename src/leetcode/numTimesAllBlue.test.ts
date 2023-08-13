function numTimesAllBlue(flips: number[]): number {
    let end = 0
    let count = 0
    let result = 0;

    for (const flip of flips) {
        end = Math.max(end, flip);
        count += 1;
        if (end !== count) continue;
        result += 1;
    }

    return result;
};


describe("numTimesAllBlue", () => {
    it('should return the number of times the light was blue', () => {
        const flips = [2, 1, 3, 5, 4]
        const output = 3
        expect(numTimesAllBlue(flips)).toBe(output)
    })
    it('should return the number of times the light was blue', () => {
        const flips = [3, 2, 4, 1, 5]
        const output = 2
        expect(numTimesAllBlue(flips)).toBe(output)
    })
    it('should return the number of times the light was blue', () => {
        const flips = [4, 1, 2, 3]
        const output = 1
        expect(numTimesAllBlue(flips)).toBe(output)
    })
    it('should return the number of times the light was blue', () => {
        const flips = [2, 1, 4, 3, 6, 5]
        const output = 3
        expect(numTimesAllBlue(flips)).toBe(output)
    })
    it('should return the number of times the light was blue', () => {
        const flips = [1, 2, 3, 4, 5, 6]
        const output = 6
        expect(numTimesAllBlue(flips)).toBe(output)
    })
})