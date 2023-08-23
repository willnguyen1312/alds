function totalFruit(fruits: number[]): number {
    let max = 0;
    let start = 0;
    let end = 0;
    let count = 0;
    let map = new Map<number, number>();

    while (end < fruits.length) {
        const fruit = fruits[end];
        if (map.get(fruit) === undefined) {
            map.set(fruit, 1);
            count++;
        } else {
            map.set(fruit, map.get(fruit)! + 1);
        }

        while (count > 2) {
            const fruit = fruits[start];
            if (map.get(fruit) === 1) {
                map.delete(fruit);
                count--;
            } else {
                map.set(fruit, map.get(fruit)! - 1);
            }
            start++;
        }

        max = Math.max(max, end - start + 1);
        end++;
    }

    return max;
};

describe("totalFruit", () => {
    it("should return 3", () => {
        const fruits = [1, 2, 1];
        const expected = 3;
        const actual = totalFruit(fruits);
        expect(actual).toEqual(expected);
    })

    it("should return 3", () => {
        const fruits = [0, 1, 2, 2];
        const expected = 3;
        const actual = totalFruit(fruits);
        expect(actual).toEqual(expected);
    })

    it("should return 4", () => {
        const fruits = [1, 2, 3, 2, 2];
        const expected = 4;
        const actual = totalFruit(fruits);
        expect(actual).toEqual(expected);
    })
})