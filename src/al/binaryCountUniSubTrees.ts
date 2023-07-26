// https://www.dailycodingproblem.com/blog/unival-trees/
function countUnivalSubtrees(root: any) {
  let [count, _] = helper(root)
  return count
}

// # Also returns number of unival subtrees, and whether it is itself a unival subtree.
function helper(root: any): any {
  if (!root) {
    return [0, true]
  }

  let [left_count, is_left_unival] = helper(root.left)
  let [right_count, is_right_unival] = helper(root.right)
  let total_count = left_count + right_count

  if (is_left_unival && is_right_unival) {
    if (root.left && root.value !== root.left.value) {
      return [total_count, false]
    }

    if (root.right && root.value !== root.right.value) {
      return [total_count, false]
    }
    return [total_count + 1, true]
  }
  return [total_count, false]
}
