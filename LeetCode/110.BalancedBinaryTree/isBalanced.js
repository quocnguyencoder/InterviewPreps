import { TreeNode } from "./TreeNode.js";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export const isBalanced = (root) => {
  // If node == null -> return 0
  // Check left subtree. If not balanced -> return -1
  // Check right subtree. If not balanced -> return -1
  // The absolute between heights of left and right subtrees. If it is greater than 1 -> return -1.
  // If the tree is balanced -> return height
  /**
   *
   * @param {TreeNode} currentNode
   * @returns {number}
   */
  const balancedHeight = (currentNode) => {
    if (currentNode == null) {
      return 0;
    }

    const leftSubTreeHeight = balancedHeight(currentNode.left);
    const rightSubTreeHeight = balancedHeight(currentNode.right);

    if (leftSubTreeHeight === -1 || rightSubTreeHeight === -1) {
      return -1;
    }

    if (Math.abs(leftSubTreeHeight - rightSubTreeHeight) > 1) {
      return -1;
    }

    return Math.max(leftSubTreeHeight, rightSubTreeHeight) + 1;
  };

  const treeBalancedHeight = balancedHeight(root);

  return treeBalancedHeight !== -1;
};

// const tree = new TreeNode([3, 9, 20, null, null, 15, 7]);
// console.log("🚀 ~ isBalanced:", isBalanced(tree));
const tree = new TreeNode([1, 2, 2, 3, 3, null, null, 4, 4]);
console.log("🚀 ~ isBalanced:", isBalanced(tree));
