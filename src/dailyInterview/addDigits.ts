/*
Hi, here's your problem today. This problem was recently asked by Amazon:

Given a number like 159, add the digits repeatedly until you get a single number.

For instance, 1 + 5 + 9 = 15.
1 + 5 = 6.

So the answer is 6.
*/

export function addDigits(numb: number): number {
  let queue = numb.toString().split('').map(Number);

  while (queue.length > 1) {
    const sum = queue.reduce((acc, cur) => acc + cur);
    queue = sum.toString().split('').map(Number);
  }

  return queue.pop();
}
