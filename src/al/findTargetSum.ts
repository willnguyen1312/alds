//Main idea: the nums can be seperated into two parts, left and right
//left + right = sum, left - right = target
//Then we get : left - (sum - left) = target, left = (sum + target)/2
//Then we can turn this problem into a 1/0 knapsack problem
const findTargetSumWays = function (nums: number[], target: number) {
  let sum = nums.reduce((a, b) => a + b)
  if ((sum + target) % 2 === 1) return 0
  let left = (sum + target) / 2
  let dp = new Array(left + 1).fill(0) //dp[i] represents how many ways to fill up a bag with capacity i
  dp[0] = 1 //Initialization, there is 1 way to fill up a bag with 0 capacity
  for (let i = 0; i < nums.length; i++) {
    for (let j = left; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]]
    }
  }
  return dp[left]
}
