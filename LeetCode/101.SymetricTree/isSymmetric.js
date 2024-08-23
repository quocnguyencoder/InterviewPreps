import { TreeNode } from "./TreeNode.js";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const isSymmetric = function (root) {
  /**
   *
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @returns {boolean}
   */
  const check = (p, q) => {
    if (!p && !q) return true; // Both nodes are null
    if (!p || !q) return false; // One of the nodes is null
    if (p.val !== q.val) return false; // Node values are different

    // Recursively check both left and right subtrees
    return check(p.left, q.right) && check(p.right, q.left);
  };
  return check(root.left, root.right);
};

const tree = new TreeNode([1, 2, 2, 3, 4, 4, 3]);

console.log("🚀 ~ isSymmetric:", isSymmetric(tree));
