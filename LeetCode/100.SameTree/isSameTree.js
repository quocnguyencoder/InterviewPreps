import { TreeNode } from "./TreeNode.js";

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
export const isSameTree = (p, q) => {
  if (!p && !q) return true; // Both nodes are null
  if (!p || !q) return false; // One of the nodes is null
  if (p.val !== q.val) return false; // Node values are different

  // Recursively check both left and right subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const p = new TreeNode([1, 1, null]);
const q = new TreeNode([1, null, 1]);
console.log("🚀 ~ isSameTree ~ isSameTree:", isSameTree(p, q));
