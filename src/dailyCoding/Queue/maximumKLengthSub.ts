export function maximumKLengthSub(numbs: number[], k: number): number[] {
  const result: number[] = []
  const queue: number[] = []
  let i = 0
  let j = 0
  let x = 0

  while (j < numbs.length) {
    while (queue.length > 0 && queue[queue.length - 1] < numbs[j]) queue.pop()
    queue.push(numbs[j])

    if (j - i + 1 === k) {
      result[x] = queue[0]
      ++x

      if (queue[0] === numbs[i]) queue.shift()

      ++i
    }
    ++j
  }

  return result
}
