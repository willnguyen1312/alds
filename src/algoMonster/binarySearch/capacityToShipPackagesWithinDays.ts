// There are n packages that needs to be transported from one city to another,
// and you need to transport them there within d days.
// For the ith package, the weight of the package is weights[i].
// You are required to deliver them in order, and in order to minimize the cost,
// you want to deliver the packages in one truck once per day, with a capacity
// as small as possible to save truck rental cost.
// What is the minimum capacity of the truck that is required to deliver all packages within d days?

function checkPossible(
  weights: number[],
  maxWeight: number,
  days: number,
): boolean {
  let reqDays = 1
  let capacity = maxWeight
  let i = 0
  let n = weights.length

  while (i < n) {
    if (weights[i] <= capacity) {
      capacity -= weights[i]
      i += 1
    } else {
      reqDays += 1
      capacity = maxWeight
    }
  }
  return reqDays <= days
}

export function capacityToShipPackagesWithinDays(
  weights: number[],
  day: number,
): number {
  let left = Math.max(...weights)
  let right = weights.reduce((acc, cur) => acc + cur)
  let result = right

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (checkPossible(weights, mid, day)) {
      result = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return result
}
