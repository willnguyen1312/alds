import { minStepsFromTopLeft2BottomRight } from './minStepsFromTopLeft2BottomRight';

describe('minStepsFromTopLeft2BottomRight function', () => {
  it('should work', () => {
    const board = [
      [0, 0, 0, 0],
      [1, 1, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    const actual = minStepsFromTopLeft2BottomRight(board, 0, 0, 3, 3);
    expect(actual).toBe(6);
  });
});
