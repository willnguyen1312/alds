import { findLongestPrefix1, findLongestPrefix2 } from './findPrefix';

const data = ['axo', 'axonprefix', 'axonn'];
const result = 'axo';

test('find longest prefix', () => {
  expect(findLongestPrefix1(data)).toEqual(result);
  expect(findLongestPrefix2(data)).toEqual(result);
});
