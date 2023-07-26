// https://www.youtube.com/watch?v=QRa9ZVGMWlY
function kthGrammar(n: number, k: number): number {
  if (n === 1) {
    return 0
  }

  const parent = kthGrammar(n - 1, Math.ceil(k / 2))
  const isOdd = k % 2 === 1

  if (parent === 1) {
    return isOdd ? 1 : 0
  } else {
    return isOdd ? 0 : 1
  }
}

// Input: n = 3, k = 1
// Output: 0
// Explanation:
// row 1: 0
// row 2: 01
// row 3: 0110
