export class TreeNode {
  val: number;
  left?: TreeNode;
  right?: TreeNode;

  constructor(val: number, left?: TreeNode, right?: TreeNode) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function serialize(root: TreeNode | undefined): string {
  const res = [];
  serialize_dfs(root, res);
  return res.join(' ');
}

function serialize_dfs(root: TreeNode, res: string[]) {
  if (!root) {
    res.push('x');
    return;
  }
  res.push(root.val.toString());
  serialize_dfs(root.left, res);
  serialize_dfs(root.right, res);
}

export function deserialize(s: string) {
  return deserialize_dfs(s.split(' ')[Symbol.iterator]());
}

function deserialize_dfs(nodes: any) {
  let val = nodes.next().value;
  if (val === 'x') return;
  const cur = new TreeNode(parseInt(val, 10));
  cur.left = deserialize_dfs(nodes);
  cur.right = deserialize_dfs(nodes);
  return cur;
}
