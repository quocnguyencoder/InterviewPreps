import { TreeNode } from "./TreeNode.js";

/**
 * @param {TreeNode} root
 * @return {number}
 */
export const minDepth = (root) => {
  if (!root) return 0;
  const minLeft = minDepth(root.left);
  const minRight = minDepth(root.right);
  // to ignore the branch that have no node
  return (Math.min(minLeft, minRight) || Math.max(minLeft, minRight)) + 1;
};

// const tree = new TreeNode([3, 9, 20, null, null, 15, 7]);
const tree = new TreeNode([2, null, 3, null, 4, null, 5, null, 6]);
console.log("🚀 ~ minDepth:", minDepth(tree));
