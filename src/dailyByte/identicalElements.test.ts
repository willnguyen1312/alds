import { identicalElements } from './identicalElements';

describe('identicalElements function', () => {
  it('should work', () => {
    const actual1 = identicalElements([1, 2, 1], 1);
    expect(actual1).toBe(false);

    const actual2 = identicalElements([2, 3, 2], 2);
    expect(actual2).toBe(true);
  });
});
