import { firstElementNotSmallerThanTarget } from './firstElementNotSmallerThanTarget';

describe('firstElementNotSmallerThanTarget function', () => {
  it('should work', () => {
    expect(firstElementNotSmallerThanTarget([1, 2, 4, 5], 3)).toEqual(2);

    expect(firstElementNotSmallerThanTarget([1, 2, 3, 4, 5], 3)).toEqual(2);
  });
});
