import { findSumWithIndex1, findSumWithIndex2 } from './findSumWithIndex';

const data = [1, 8, 9, 2, 0];
const sum = 10;
const result = [2, 8];

test('find sum with max index', () => {
  expect(findSumWithIndex1(data, sum)).toEqual(result);

  //   Return indexes
  expect(findSumWithIndex2(data, sum)).toMatchInlineSnapshot(`
    [
      1,
      3,
    ]
  `);
});
