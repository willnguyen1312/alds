/*
Hi, here's your problem today. This problem was recently asked by Facebook:

Given a list of unique numbers, generate all possible subsets without duplicates.
This includes the empty set as well.
*/

export function generateAllSubSets(numbs: number[]): number[][] {
  const length = numbs.length
  const result: number[][] = []

  function generateAllSubSetsUtil(subset: number[], index = 0) {
    result.push(subset.slice())
    for (let i = index; i < length; i++) {
      const element = numbs[i]
      subset.push(element)
      generateAllSubSetsUtil(subset, i + 1)
      subset.pop()
    }
  }

  generateAllSubSetsUtil([])

  return result
}

// # In the array A at every step we have two
// # choices for each element either we can
// # ignore the element or we can include the
// # element in our subset
// def subsetsUtil(A, subset, index):
//     print(*subset)
//     for i in range(index, len(A)):

//         # include the A[i] in subset.
//         subset.append(A[i])

//         # move onto the next element.
//         subsetsUtil(A, subset, i + 1)

//         # exclude the A[i] from subset and
//         # triggers backtracking.
//         subset.pop(-1)
//     return

// # below function returns the subsets of vector A.
// def subsets(A):
//     global res
//     subset = []

//     # keeps track of current element in vector A
//     index = 0
//     subsetsUtil(A, subset, index)
