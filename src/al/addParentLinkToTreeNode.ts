import { cloneDeep } from 'lodash';

export type TreeNodeWithoutParentLink = {
  label: string;
  children?: TreeNodeWithoutParentLink[];
};

export type TreeNodeWithParentLink = {
  label: string;
  children?: TreeNodeWithParentLink[];
  parent?: TreeNodeWithParentLink;
};

export const addParentLinkToTreeNode = (
  tree: TreeNodeWithParentLink[]
): TreeNodeWithParentLink[] => {
  const clonedTree = cloneDeep(tree);
  clonedTree.forEach((node) => dfs(node));

  return clonedTree;
};

const dfs = (
  treeNode?: TreeNodeWithParentLink,
  parent?: TreeNodeWithParentLink
) => {
  if (!treeNode) return;

  treeNode.children?.forEach((node) => dfs(node, treeNode));
  treeNode.parent = parent;
};
