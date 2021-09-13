import { maximumProduct2 } from './maximumProduct';

describe('maximumProduct function', () => {
  it('should work', () => {
    const actual = maximumProduct2([-10, -10, 5, 2]);
    expect(actual).toBe(500);
  });
});
