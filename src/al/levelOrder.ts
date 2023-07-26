function levelOrder(root: TreeNode | null): number[][] {
  let q = [root]
  let result = []

  while (q[0]) {
    let length = q.length
    let input = []

    for (let i = 0; i < length; i++) {
      let curr: any = q.shift()
      input.push(curr.val)
      if (curr.left) q.push(curr.left)
      if (curr.right) q.push(curr.right)
    }

    result.push(input)
  }

  return result
}
