import { numberOf1Bits } from './numberOf1Bits';

describe('numberOf1Bits function', () => {
  it('should work', () => {
    const actual = numberOf1Bits(23);
    expect(actual).toBe(4);
  });
});
