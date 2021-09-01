import {
  findNoneDuplicateNumber,
  findNoneDuplicateNumberExtra,
} from './findNoneDuplicateNumber';

describe('findNoneDuplicateNumber function', () => {
  it('should work', () => {
    expect(findNoneDuplicateNumber([4, 3, 2, 4, 1, 3, 2])).toBe(1);
  });
});

describe('findNoneDuplicateNumberExtra function', () => {
  it('should work', () => {
    expect(findNoneDuplicateNumberExtra([4, 3, 2, 4, 1, 3, 2])).toBe(1);
  });
});
