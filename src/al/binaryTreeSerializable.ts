export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
  }
}

const serialize = (root: TreeNode | null) => {
  if (!root) {
    return null;
  }

  const data = [];

  // Level-order traversal
  const queue: (TreeNode | null)[] = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node) {
      data.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      data.push(null);
    }
  }

  // Clean up the trailing nulls in data
  while (data.length > 0 && data[data.length - 1] === null) {
    data.pop();
  }

  return JSON.stringify(data);
};

const deserialize = (data: any) => {
  // Sanity checks
  try {
    data = JSON.parse(data);
  } catch (e) {
    return null;
  }

  if (!(data instanceof Array) || data.length === 0) {
    return null;
  }

  const root = new TreeNode(data.shift());
  const queue = [root];

  while (data.length > 0) {
    const node: any = queue.shift();

    // Left node
    let val = data.shift();
    if (typeof val !== 'undefined' && val !== null) {
      node.left = new TreeNode(val);
      queue.push(node.left);
    }

    // Right node
    val = data.shift();
    if (typeof val !== 'undefined' && val !== null) {
      node.right = new TreeNode(val);
      queue.push(node.right);
    }
  }

  return root;
};
