/*
Hi, here's your problem today. This problem was recently asked by Amazon:

Given a 32 bit integer, reverse the bits and return that number.

Example:
Input: 1234 
# In bits this would be 0000 0000 0000 0000 0000 0100 1101 0010
Output: 1260388352
# Reversed bits is 0100 1011 0010 0000 0000 0000 0000 0000
*/

function toBinary(numb: number): number[] {
  const result: number[] = [];

  while (numb > 0) {
    result.unshift(numb % 2);
    numb = Math.floor(numb / 2);
  }

  return result;
}

export function reverseBinary(numb: number): number {
  let binaryNumbs = toBinary(numb);
  binaryNumbs = Array(32 - binaryNumbs.length)
    .fill(0)
    .concat(binaryNumbs);

  return binaryNumbs.reduce((acc, cur, index) => {
    return (acc += cur ? Math.pow(2, index) : 0);
  }, 0);
}
