function minNumberOfJumps2(array: number[]) {
  const jumps = new Array(array.length).fill(Infinity)

  jumps[0] = 0

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] >= i - j) {
        jumps[i] = Math.min(jumps[j] + 1, jumps[i])
      }
    }
  }

  return jumps[jumps.length - 1]
}

function minNumberOfJumps(array: number[]) {
  if (array.length === 1) return 0

  let jumps = 0
  let maxReach = array[0]
  let steps = array[0]

  for (let i = 1; i < array.length - 1; i++) {
    maxReach = Math.max(maxReach, i + array[i])
    steps--
    if (steps === 0) {
      jumps++
      steps = maxReach - i
    }
  }

  return jumps + 1
}
