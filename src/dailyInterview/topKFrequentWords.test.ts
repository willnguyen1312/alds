import { topKFrequentWords } from './topKFrequentWords';

describe('topKFrequentWords function', () => {
  it('should work', () => {
    expect(
      topKFrequentWords(
        ['daily', 'interview', 'pro', 'pro', 'for', 'daily', 'pro', 'problems'],
        2
      )
    ).toEqual(['pro', 'daily']);
  });
});
