/*Hi, here's your problem today. This problem was recently asked by Google:

Given a positive integer, find the square root of the integer without
using any built in square root or power functions (math.sqrt or the ** operator).
Give accuracy up to 3 decimal points.
*/

export function squareRoot(numb: number, precision = 3): number {
  let answer: number
  let start = 0
  let end = numb

  while (start < end) {
    const middle = Math.floor((start + end) / 2)
    const power2 = middle * middle

    if (power2 === numb) {
      return middle
    }

    if (power2 < numb) {
      start = middle + 1
      answer = middle
    } else {
      end = middle - 1
    }
  }

  let precise = 0.1

  for (let index = 0; index < precision; index++) {
    while (answer * answer <= numb) {
      answer += precise
    }

    answer -= precise
    precise /= 10
  }

  return +answer.toFixed(precision)
}
