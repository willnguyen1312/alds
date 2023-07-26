// https://leetcode.com/problems/sliding-window-maximum/
function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = []
  const maxQueue: number[] = []
  let j = 0
  let x = 0
  let i = 0

  while (j < nums.length) {
    while (maxQueue.length > 0 && maxQueue[maxQueue.length - 1] < nums[j]) {
      maxQueue.pop()
    }

    maxQueue.push(nums[j])

    if (j - i + 1 === k) {
      result[x] = maxQueue[0]
      ++x

      if (maxQueue[0] === nums[i]) maxQueue.shift()

      ++i
    }
    j++
  }

  return result
}
