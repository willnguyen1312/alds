import { pickUpChange } from './pickUpChange';

describe('pickUpChange function', () => {
  it('should work', () => {
    const actual = pickUpChange([
      [0, 3, 0, 2],
      [1, 2, 3, 3],
      [6, 0, 3, 2],
    ]);

    expect(actual).toBe(13);
  });
});
