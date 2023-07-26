export class TreeNode {
  val: number
  children: TreeNode[] = []

  constructor(val: number) {
    this.val = val
  }
}

export function findAllRootToLeafPaths(root: TreeNode) {
  const res = []
  const path = []

  function dfs(root: TreeNode) {
    // Is leaf node
    if (root.children.length === 0) {
      path.push(root.val)
      res.push(path.join("->"))
      path.pop()
      return
    }

    for (let child of root.children) {
      if (child) {
        path.push(root.val)
        dfs(child)
        path.pop()
      }
    }
  }

  dfs(root)
  return res
}
