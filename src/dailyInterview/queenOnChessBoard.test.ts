import { queenOnChessBoard } from './queenOnChessBoard';

describe('queenOnChessBoard function', () => {
  it('should work', () => {
    const actual = queenOnChessBoard(5);
    expect(actual).toEqual([
      [1, , , , ,],
      [, , , 1, ,],
      [, 1, , , ,],
      [, , , , 1],
      [, , 1, , ,],
    ]);
  });
});
