import { circleOfChainedWords } from './circleOfChainedWords';

describe('circleOfChainedWords function', () => {
  it('should work', () => {
    expect(
      circleOfChainedWords(['eggs', 'karat', 'apple', 'snack', 'tuna'])
    ).toBe(true);
  });
});
