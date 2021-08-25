import { editDistance } from './editDistance';

describe('editDistance function', () => {
  it('should work', () => {
    expect(editDistance('biting', 'sitting')).toBe(2);
  });
});
