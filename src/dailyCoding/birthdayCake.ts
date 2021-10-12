/*
This question is asked by Amazon. You are at a birthday party and
are asked to distribute cake to your guests.
Each guess is only satisfied if the size of the piece of cake they’re given,
matches their appetite (i.e. is greater than or equal to their appetite).
Given two arrays, appetite and cake where the ith element of appetite
represents the ith guest’s appetite, and the elements of cake represents the sizes of cake
you have to distribute, return the maximum number of guests that you can satisfy. 

Ex: Given the following arrays appetite and cake…

appetite = [1, 2, 3], cake = [1, 2, 3], return 3.
Ex: Given the following arrays appetite and cake…

appetite = [3, 4, 5], cake = [2], return 0.
*/

export function birthdayCake(appetites: number[], cakeSizes: number[]): number {
  appetites.sort((a, b) => a - b);
  cakeSizes.sort((a, b) => a - b);

  let result = 0;

  for (let index = 0; index < cakeSizes.length; index++) {
    const cakeSize = cakeSizes[index];
    const appetite = appetites[index];

    if (cakeSize < appetite) {
      return result;
    }

    result++;
  }

  return result;
}
