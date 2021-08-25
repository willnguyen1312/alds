/*
Hi, here's your problem today. This problem was recently asked by Uber:

Given a list of numbers, find if there exists a pythagorean triplet in that list. A pythagorean triplet is 3 variables a, b, c where a2 + b2 = c2

Example:
Input: [3, 5, 12, 5, 13]
Output: True
Here, 52 + 122 = 132.
*/

export function checkPythagoreanTriplets(numbs: number[]) {
  const squaredNumbs = numbs.map((numb) => Math.pow(numb, 2));
  squaredNumbs.sort((a, b) => a - b);

  for (let index = squaredNumbs.length - 1; index >= 2; index--) {
    let left = 0;
    let right = index - 1;

    while (left < right) {
      if (squaredNumbs[left] + squaredNumbs[right] == squaredNumbs[index]) return true;

      if (squaredNumbs[left] + squaredNumbs[right] < squaredNumbs[index]) left++;
      else right--;
    }
  }

  return false;
}
