// @ts-ignore
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  insert(value: number) {
    if (value < this.val) {
      if (this.left === null) {
        this.left = new TreeNode(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new TreeNode(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder === null || inorder.length !== postorder.length) return null;
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  return build(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    postorder.length - 1,
    map
  );
}

function build(
  inorder: number[],
  iLo: number,
  iHi: number,
  postorder: number[],
  pHi: number,
  map: any
) {
  if (iLo > iHi) return null;
  if (iLo === iHi) return new TreeNode(inorder[iLo]);
  let root = new TreeNode(postorder[pHi]);
  let id = map.get(root.val);
  root.left = build(inorder, iLo, id - 1, postorder, pHi - (iHi - id) - 1, map);
  root.right = build(inorder, id + 1, iHi, postorder, pHi - 1, map);
  return root;
}

function buildTree2(preorder: number[], inorder: number[]): any {
  if (preorder.length == 0 || preorder.length != inorder.length) return null;
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  return build2(preorder, 0, inorder, 0, inorder.length - 1, map);
}

function build2(
  preorder: number[],
  pLo: number,
  inorder: number[],
  inLo: number,
  inHi: number,
  map: any
) {
  if (inLo > inHi) return null;
  if (inLo === inHi) return new TreeNode(preorder[pLo]);
  let root = new TreeNode(preorder[pLo]);
  let inId = map.get(root.val);
  root.left = build2(preorder, pLo + 1, inorder, inLo, inId - 1, map);
  root.right = build2(
    preorder,
    pLo + inId - inLo + 1,
    inorder,
    inId + 1,
    inHi,
    map
  );
  return root;
}
