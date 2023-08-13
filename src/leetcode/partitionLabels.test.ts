function partitionLabels(s: string): number[] {
    let lastIndexMap = new Map();

    for (let i = 0; i < s.length; i++) {
        lastIndexMap.set(s[i], i);
    }

    let result = [];
    let size = 0;
    let end = 0;

    for (let j = 0; j < s.length; j++) {
        size += 1;
        end = Math.max(end, lastIndexMap.get(s[j]));

        if (j == end) {
            result.push(size);
            size = 0;
        }
    }

    return result;
};

describe("partitionLabels", () => {
    it('case 1', () => {
        let result = partitionLabels("ababcbacadefegdehijhklij");
        expect(result).toEqual([9, 7, 8]);
    });

    it('case 2', () => {
        let result = partitionLabels("eccbbbbdec");
        expect(result).toEqual([10]);
    });
})