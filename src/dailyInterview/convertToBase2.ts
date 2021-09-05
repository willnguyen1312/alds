/*
Hi, here's your problem today. This problem was recently asked by Apple:

Given a non-negative integer n, convert n to base 2 in string form.
Do not use any built in base 2 conversion functions like bin.
*/

export function convertToBase2(numb: number): string {
  const queue: number[] = [];

  while (numb > 0) {
    queue.unshift(numb % 2);
    numb = Math.floor(numb / 2);
  }

  return queue.map(String).join('');
}
