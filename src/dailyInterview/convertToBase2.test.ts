import { convertToBase2 } from './convertToBase2';

describe('convertToBase2 function', () => {
  it('should work', () => {
    const actual = convertToBase2(123);
    expect(actual).toBe('1111011');
  });
});
