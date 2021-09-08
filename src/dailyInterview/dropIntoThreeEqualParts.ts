/*
Hi, here's your problem today. This problem was recently asked by Twitter:

Given an array containing only positive integers,
return if you can pick two integers from the array
which cuts the array into three pieces
such that the sum of elements in all pieces is equal.

Example 1:
Input: array = [2, 4, 5, 3, 3, 9, 2, 2, 2]

Output: true
Explanation: choosing the number 5 and 9 results in three pieces [2, 4], [3, 3] and [2, 2, 2]. Sum = 6.

Example 2:
Input: array =[1, 1, 1, 1],

Output: false
*/

export function dropIntoThreeEqualParts(numbs: number[]): boolean {
  let leftPointer = 1;
  let rightPointer = numbs.length - 2;
  let leftPartSum: number, middlePartSum: number, rightPartSum: number;
  const sumArray: number[] = [];
  sumArray[0] = numbs[0];

  for (let index = 1; index < numbs.length; index++) {
    sumArray[index] = sumArray[index - 1] + numbs[index];
  }

  while (leftPointer < rightPointer) {
    leftPartSum = sumArray[leftPointer] - numbs[leftPointer];
    middlePartSum =
      sumArray[rightPointer] - sumArray[leftPointer] - numbs[rightPointer];
    rightPartSum = sumArray[numbs.length - 1] - sumArray[rightPointer];

    if (leftPartSum === middlePartSum && middlePartSum === rightPartSum) {
      return true;
    }

    if (leftPartSum < rightPartSum) {
      leftPointer++;
    } else if (leftPartSum > rightPartSum) {
      rightPointer--;
    } else {
      leftPointer++;
      rightPointer--;
    }
  }

  return false;
}
