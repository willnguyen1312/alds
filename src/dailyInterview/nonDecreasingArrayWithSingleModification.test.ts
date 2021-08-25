import { nonDecreasingArrayWithSingleModification } from './nonDecreasingArrayWithSingleModification';

describe('nonDecreasingArrayWithSingleModification function', () => {
  it('should work', () => {
    expect(nonDecreasingArrayWithSingleModification([13, 4, 7])).toBe(true);
    expect(nonDecreasingArrayWithSingleModification([13, 4, 1])).toBe(false);
  });
});
