function connect(root: any) {
  if (!root || !root.left || !root.right) return root;

  root.left.next = root.right;

  if (root.next) {
    root.right.next = root.next.left;
  }

  connect(root.left);
  connect(root.right);

  return root;
}

function connect2(root: any) {
  if (!root) {
    return null;
  }

  let frontier = [root];

  while (frontier.length) {
    const next: any = [];

    frontier.forEach((node, index) => {
      if (frontier[index + 1]) {
        node.next = frontier[index + 1];
      } else {
        node.next = null;
      }

      if (node.left) {
        next.push(node.left);
      }

      if (node.right) {
        next.push(node.right);
      }
    });

    frontier = next;
  }

  return root;
}
