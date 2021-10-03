/*
This question is asked by Facebook.

Given two integers x and y, return the hamming distance between the two numbers. 
Note: The hamming distance between two numbers is the number of bit positions
in which the bits differ. 

Ex: Given the following integers x and y…

x = 2, y = 4, return 2.
2 in binary is 0 0 1 0
4 in binary is 0 1 0 0
therefore the number of positions in which the bits differ is two.
*/

export function hammingDistance(first: number, second: number) {
  const firstBinary = first.toString(2).split('');
  const secondBinary = second.toString(2).split('');
  const length = Math.max(firstBinary.length, secondBinary.length);
  const longer =
    secondBinary.length > firstBinary.length ? secondBinary : firstBinary;
  let shorter =
    secondBinary.length < firstBinary.length ? secondBinary : firstBinary;

  const diff = longer.length - shorter.length;
  const filledArr: string[] = new Array(diff).fill('0');

  shorter = filledArr.concat(shorter);

  let result = 0;

  for (let index = 0; index < length; index++) {
    if (shorter[index] !== longer[index]) {
      result++;
    }
  }

  return result;
}
