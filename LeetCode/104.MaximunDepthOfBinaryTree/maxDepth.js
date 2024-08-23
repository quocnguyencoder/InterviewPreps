import { TreeNode } from "./TreeNode.js";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const maxDepth = function (root) {
  if (!root) return 0;
  const maxLeft = maxDepth(root.left);
  const maxRight = maxDepth(root.right);
  return Math.max(maxLeft, maxRight) + 1;
};

const tree = new TreeNode([1, 2, 2, 3, 4, 4, 3]);

console.log("🚀 ~ maxDepth:", maxDepth(tree));
