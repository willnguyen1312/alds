// You are given the root of a binary tree.
// Each node in the tree contains either a value of zero or a value of one.
// Each path in the tree from root to leaf forms a binary string and therefore a decimal value.
// Return the sum of all root to leaf paths using each path’s decimal value.

export class TreeNode {
  value: number
  left?: TreeNode
  right?: TreeNode

  constructor(value: number, left?: TreeNode, right?: TreeNode) {
    this.value = value
    this.left = left
    this.right = right
  }
}

export function binaryTreeBinaryPaths(root: TreeNode): number {
  const binaryPaths: number[][] = []
  const path: number[] = []
  const stack: TreeNode[] = [root]

  while (stack.length) {
    const node = stack.pop()
    path.push(node.value)

    if (node.left) {
      stack.push(node.left)
    }

    if (node.right) {
      stack.push(node.right)
    }

    if (!node.left && !node.right) {
      binaryPaths.push(path.slice())
      path.pop()
    }
  }

  //   function dfs(node: TreeNode | undefined, path: number[]) {
  //     if (!node) {
  //       return;
  //     }

  //     if (!node.left && !node.right) {
  //       binaryPaths.push(path.slice());
  //     }

  //     if (node.left) {
  //       path.push(node.left.value);
  //       dfs(node.left, path);
  //       path.pop();
  //     }

  //     if (node.right) {
  //       path.push(node.right.value);
  //       dfs(node.right, path);
  //       path.pop();
  //     }
  //   }

  //   dfs(root, [root.value]);

  const result = binaryPaths
    .map(binaryToDecimal)
    .reduce((acc, curr) => acc + curr)

  return result
}

export function binaryToDecimal(binary: number[]): number {
  let result = 0

  for (let i = 0; i < binary.length; i++) {
    result += binary[i] * Math.pow(2, binary.length - i - 1)
  }

  return result
}

export function decimalToBinary(decimal: number): number[] {
  let result: number[] = []

  while (decimal > 0) {
    result.push(decimal % 2)
    decimal = Math.floor(decimal / 2)
  }

  return result.reverse()
}
