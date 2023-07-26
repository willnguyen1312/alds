export function maxSlidingWindow(nums: number[], k: number): number[] {
  let result: number[] = []
  const queue: number[] = []
  //   Used to remove max value at the beginning of queue when out of range
  let i = 0
  //   Index of looping nums
  let j = 0
  //   Index of result
  let x = 0

  while (j < nums.length) {
    //   Remove smaller numbers our of queue
    while (queue.length > 0 && queue[queue.length - 1] < nums[j]) queue.pop()

    // Add number to queue
    queue.push(nums[j])

    if (j - i + 1 === k) {
      result[x] = queue[0]
      ++x

      //   Remove max at the beginning if equal to i
      if (queue[0] === nums[i]) queue.shift()

      ++i
    }
    ++j
  }

  return result
}

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
