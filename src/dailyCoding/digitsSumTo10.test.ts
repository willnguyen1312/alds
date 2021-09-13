import { digitsSumTo10 } from './digitsSumTo10';

describe('digitsSumTo10 function', () => {
  it('should work', () => {
    const actual1 = digitsSumTo10(1);
    expect(actual1).toBe(19);
    const actual2 = digitsSumTo10(2);
    expect(actual2).toBe(28);
    const actual3 = digitsSumTo10(20);
    expect(actual3).toBe(190);
  });
});
