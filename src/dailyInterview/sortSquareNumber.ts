/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

Given a list of sorted numbers (can be both negative or positive),
return the list of numbers squared in sorted order.

Here's an example and some starting code:

def square_numbers(nums):
 # Fill this in.

print(square_numbers([-5, -3, -1, 0, 1, 4, 5]))
# [0, 1, 1, 9, 16, 25, 25]
*/

export function sortSquareNumber(numbs: number[]): number[] {
  const length = numbs.length;
  const result: number[] = new Array(numbs.length);
  let index = length - 1;
  let left = 0;
  let right = numbs.length - 1;

  while (index >= 0) {
    const squareLeft = Math.pow(numbs[left], 2);
    const squareRight = Math.pow(numbs[right], 2);
    if (squareLeft > squareRight) {
      result[index] = squareLeft;
      left++;
    } else {
      result[index] = squareRight;
      right--;
    }
    index--;
  }

  return result;
}
