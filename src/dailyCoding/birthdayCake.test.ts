import { birthdayCake } from './birthdayCake';

describe('birthdayCake function', () => {
  it('should work', () => {
    const actual1 = birthdayCake([1, 2, 3], [1, 2, 3]);
    expect(actual1).toBe(3);

    const actual2 = birthdayCake([3, 4, 5], [2]);
    expect(actual2).toBe(0);
  });
});
