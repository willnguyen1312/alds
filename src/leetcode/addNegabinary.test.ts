function addNegabinary(arr1: number[], arr2: number[]): number[] {
    const sum = [];
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    let carry = 0;
    while (i >= 0 || j >= 0 || carry) {
        let total = carry;
        if (i >= 0) total += arr1[i--];
        if (j >= 0) total += arr2[j--];
        sum.unshift(total & 1);
        carry = -(total >> 1);
    }
    while (sum[0] === 0 && sum.length > 1) {
        sum.shift();
    }
    return sum;
};

describe('Adding Two Negabinary Numbers', () => {
    it('should add two negabinary numbers', () => {
        const arr1 = [1, 1, 1, 1, 1];
        const arr2 = [1, 0, 1];
        const output = [1, 0, 0, 0, 0];
        expect(addNegabinary(arr1, arr2)).toEqual(output);
    })
})