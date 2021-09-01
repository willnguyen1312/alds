import { nonDecreasingArrayWithSingleModification } from './nonDecreasingArrayWithSingleModification';

describe('nonDecreasingArrayWithSingleModification function', () => {
  it('should work', () => {
    expect(nonDecreasingArrayWithSingleModification([13, 4, 7])).toBe(true);
    expect(nonDecreasingArrayWithSingleModification([3, 4, 2, 7])).toBe(true);
    expect(nonDecreasingArrayWithSingleModification([3, 4, 2, 3])).toBe(false);
    expect(nonDecreasingArrayWithSingleModification([13, 4, 1])).toBe(false);
    expect(nonDecreasingArrayWithSingleModification([5, 1, 3, 2, 5])).toBe(
      false
    );
  });
});
