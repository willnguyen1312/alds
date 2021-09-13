import { countInversion } from './countInversion';

describe('countInversion function', () => {
  it('should work', () => {
    const actual = countInversion([2, 4, 1, 3, 5]);
    expect(actual).toBe(3);
  });
});
