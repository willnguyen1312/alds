import { makingChange } from './makingChange';

describe('makingChange function', () => {
  it('should work', () => {
    expect(makingChange([1, 5, 10, 25], 36)).toBe(3);
  });
});
