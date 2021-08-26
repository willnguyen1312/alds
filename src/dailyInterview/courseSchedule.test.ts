import { courseSchedule } from './courseSchedule';

describe('courseSchedule function', () => {
  it('should work', () => {
    expect(
      courseSchedule(4, [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
      ])
    ).toEqual([0, 1, 2, 3]);
  });
});
