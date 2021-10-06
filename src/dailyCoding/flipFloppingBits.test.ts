import { flipFloppingBits } from './flipFloppingBits';

describe('flipFloppingBits function', () => {
  it('should work', () => {
    const actual1 = flipFloppingBits(5);
    expect(actual1).toBe(true);

    const actual2 = flipFloppingBits(8);
    expect(actual2).toBe(false);
  });
});
