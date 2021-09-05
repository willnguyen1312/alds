import { multiplyLargeNumbers } from './multiplyLargeNumbers';

describe('multiplyLargeNumbers function', () => {
  it('should work', () => {
    const actual = multiplyLargeNumbers('11', '13');
    expect(actual).toBe('143');
  });
});
