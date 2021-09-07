import { generateAllSubSets } from './generateAllSubSets';

describe('generateAllSubSets function', () => {
  it('should work', () => {
    const actual = generateAllSubSets([1, 2, 3]);
    expect(actual).toEqual([
      [],
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 3],
      [2],
      [2, 3],
      [3],
    ]);
  });
});
