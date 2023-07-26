/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

Given a tree, the leaves form a certain order from left to right. Two trees are considered "leaf-similar" if their leaf orderings are the same.

For instance, the following two trees are considered leaf-similar because their leaves are [2, 1]:
    3
   / \ 
  5   1
   \
    2 
    7
   / \ 
  2   1
   \
    2 
Our job is to determine, given two trees, whether they are "leaf similar."

class Node(object):
  def __init__(self, x):
    self.val = x
    self.left = None
    self.right = None
  
class Solution(object):
  def leafSimilar(self, root1, root2):
    # Fill this in.

#    3
#   / \ 
#  5   1
#   \
#    2 

t1 = Node(3)
t1.left = Node(5)
t1.right = Node(1)
t1.left.left = Node(6)
t1.left.right = Node(2)

#    7
#   / \ 
#  2   1
#   \
#    2 
t2 = Node(7)
t2.left = Node(2)
t2.right = Node(1)
t2.left.left = Node(6)
t2.left.right = Node(2)

print(Solution().leafSimilar(t1, t2))
# True
*/

export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode,
  ) {}
}

export function leafSimilarTrees(
  first: BinaryTreeNode,
  second: BinaryTreeNode,
): boolean {
  function dfsCollect(node: BinaryTreeNode, result: number[] = []) {
    if (!node.left && !node.right) {
      result.push(node.data)
      return result
    }

    if (node.left) {
      dfsCollect(node.left, result)
    }

    if (node.right) {
      dfsCollect(node.right, result)
    }

    return result
  }

  const firstResult = dfsCollect(first)
  const secondResult = dfsCollect(second)

  if (firstResult.length !== secondResult.length) {
    return false
  }

  for (let index = 0; index < firstResult.length; index++) {
    if (firstResult[index] !== secondResult[index]) {
      return false
    }
  }

  return true
}
