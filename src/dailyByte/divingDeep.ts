/*
This question is asked by Google. Given an N-ary tree, return its maximum depth. 
Note: An N-ary tree is a tree in which any node may have at most N children. 

Ex: Given the following tree…

            4
          / | \
         3  9  2
        /       \
       7         2
return 3.
*/

export class BinaryTreeNode {
  constructor(public data: number, public children: BinaryTreeNode[] = []) {}
}

export function divingDeep(root: BinaryTreeNode): number {
  const depths: number[] = [];

  for (const child of root.children) {
    depths.push(divingDeep(child));
  }

  const result = (depths.length ? Math.max(...depths) : 0) + 1;
  return result;
}
