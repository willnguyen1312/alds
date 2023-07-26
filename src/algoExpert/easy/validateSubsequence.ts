export function validateSubsequence(
  arr: number[],
  sequence: number[],
): boolean {
  let arrIndex = 0
  let seqIndex = 0

  while (arrIndex < arr.length && seqIndex < sequence.length) {
    if (sequence[seqIndex] === arr[arrIndex]) {
      seqIndex++
    }
    arrIndex++
  }

  return seqIndex === sequence.length
}
