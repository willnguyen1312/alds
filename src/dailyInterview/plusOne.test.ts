import { plusOne } from './plusOne';

describe('plusOne function', () => {
  it('should work', () => {
    expect(plusOne([2, 3, 4])).toEqual([2, 3, 5]);
    expect(plusOne([9, 9])).toEqual([1, 0, 0]);
  });
});
