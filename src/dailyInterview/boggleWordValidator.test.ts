import { boggleWordValidator } from './boggleWordValidator';

describe('boggleWordValidator function', () => {
  it('should work', () => {
    const board = [
      ['I', 'L', 'A', 'W'],
      ['B', 'N', 'G', 'E'],
      ['I', 'U', 'A', 'O'],
      ['A', 'S', 'R', 'L'],
    ];

    const guess = 'BINGO';
    expect(boggleWordValidator(board, guess)).toBe(true);
  });
});
