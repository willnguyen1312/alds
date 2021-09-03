/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

Return the longest run of 1s for a given integer n's binary representation.

Example:
Input: 242
Output: 4
242 in binary is 0b11110010, so the longest run of 1 is 4.
*/

function decToBinary(numb: number): number[] {
  const binaryNum: number[] = [];

  while (numb > 0) {
    binaryNum.push(numb % 2);
    numb = Math.floor(numb / 2);
  }

  return binaryNum.reverse();
}

export function consecutiveOnceBinary(numb: number) {
  const binaryNumbers = decToBinary(numb);
  let result = 0;
  let current = 0;

  for (let index = 0; index < binaryNumbers.length; index++) {
    const element = binaryNumbers[index];
    if (element === 1) {
      current++;
    } else {
      current = 0;
    }
    result = Math.max(current, result);
  }

  result = Math.max(current, result);

  return result;
}
