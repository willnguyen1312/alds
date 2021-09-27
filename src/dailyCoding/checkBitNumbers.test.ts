import { checkBitNumbers } from './checkBitNumbers';

describe('checkBitNumbers function', () => {
  it('should work', () => {
    const actual1 = checkBitNumbers('1101', '1111', '0001');
    expect(actual1).toBe(13);
    const actual2 = checkBitNumbers('1101', '1111', '0000');
    expect(actual2).toBe(15);
  });
});
