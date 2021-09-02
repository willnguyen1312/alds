import { makeTheLargestNumber } from './makeTheLargestNumber';

describe('makeTheLargestNumber function', () => {
  it('should work', () => {
    expect(makeTheLargestNumber([17, 7, 2, 45, 72])).toBe(77245217);
  });
});
