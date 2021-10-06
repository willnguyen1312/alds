/*
Given a positive integer N, return whether or not it has alternating bit values. 

Ex: Given the following value for N…

N = 5, return true.
5 in binary is 101 which alternates bit values between 0 and 1.
Ex: Given the following value for N…

N = 8, return false
8 in binary is 1000 which does not alternate bit values between 0 and 1.
*/

export function flipFloppingBits(numb: number): boolean {
  const binaryNumb = numb.toString(2);

  for (let index = 1; index < binaryNumb.length; index++) {
    if (binaryNumb[index] === binaryNumb[index - 1]) {
      return false;
    }
  }

  return true;
}
