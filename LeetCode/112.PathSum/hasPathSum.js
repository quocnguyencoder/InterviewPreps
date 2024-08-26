import { TreeNode } from "./TreeNode.js";

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
export const hasPathSum = (root, targetSum) => {
  if (root == null) {
    return false;
  }

  if (root.left == null && root.right == null && root.val === targetSum) {
    return true;
  }

  targetSum -= root.val;

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

const tree = new TreeNode([
  5,
  4,
  8,
  11,
  null,
  13,
  4,
  7,
  2,
  null,
  null,
  null,
  1,
]);
console.log("🚀 ~ hasPathSum:", hasPathSum(tree, 22));
