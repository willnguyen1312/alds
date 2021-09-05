import { reverseString } from './reverseString';

describe('reverseString function', () => {
  it('should work', () => {
    const actual = reverseString('can you read this');
    expect(actual).toBe('this read you can');
  });
});
