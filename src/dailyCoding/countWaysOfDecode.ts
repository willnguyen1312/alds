export function countWaysOfDecode(str: string): number {
  if (!str || str.length === 0 || str[0] === '0') {
    return 0;
  }

  const dp = new Array(str.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 1; i < str.length; i++) {
    if (Number(str.charAt(i)) >= 1) {
      dp[i + 1] += dp[i];
    }
    if (
      Number(str.substr(i - 1, 2)) <= 26 &&
      Number(str.substr(i - 1, 2)) >= 1 &&
      Number(str.charAt(i - 1)) >= 1
    ) {
      dp[i + 1] += dp[i - 1];
    }
  }
  return dp[str.length];
}
