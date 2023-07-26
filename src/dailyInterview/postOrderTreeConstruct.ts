/*
Hi, here's your problem today. This problem was recently asked by Uber:

Given a postorder traversal for a binary search tree, reconstruct the tree.
A postorder traversal is a traversal order where the left child always comes before the right child,
and the right child always comes before the parent for all nodes.
*/

export class BinaryTreeNode {
  data: number
  left?: BinaryTreeNode
  right?: BinaryTreeNode
  constructor(data: number) {
    this.data = data
    this.left = null
    this.right = null
  }
}
class Index {
  postindex: number = 0
  constructor() {
    this.postindex = 0
  }
}

function constructTreeUtil(
  numbs: number[],
  postIndex: Index,
  data: number,
  min: number,
  max: number,
  size: number,
) {
  if (postIndex.postindex < 0) return null

  let root = null

  if (data > min && data < max) {
    root = new BinaryTreeNode(data)
    postIndex.postindex = postIndex.postindex - 1

    if (postIndex.postindex > 0) {
      root.right = constructTreeUtil(
        numbs,
        postIndex,
        numbs[postIndex.postindex],
        data,
        max,
        size,
      )

      root.left = constructTreeUtil(
        numbs,
        postIndex,
        numbs[postIndex.postindex],
        min,
        data,
        size,
      )
    }
  }

  return root
}

export function postOrderTreeConstruct(numbs: number[], size = numbs.length) {
  const index = new Index()
  index.postindex = size - 1
  return constructTreeUtil(
    numbs,
    index,
    numbs[index.postindex],
    Number.MIN_VALUE,
    Number.MAX_VALUE,
    size,
  )
}
