export class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val === undefined ? 0 : val;
    this.left = left;
    this.right = right;
  }

  // Static method to create a tree from an array
  static fromArray(arr) {
    if (!arr.length) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (i < arr.length) {
      const current = queue.shift();

      if (arr[i] !== null) {
        current.left = new TreeNode(arr[i]);
        queue.push(current.left);
      }
      i++;

      if (i < arr.length && arr[i] !== null) {
        current.right = new TreeNode(arr[i]);
        queue.push(current.right);
      }
      i++;
    }

    return root;
  }

  // toString method to display the tree
  toString() {
    // This can be customized later with your own traversal logic
    return `TreeNode(${this.val})`;
  }
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (root) => {
  let values = [];

  const traversal = (node) => {
    if (!node) return;

    traversal(node.left);
    values.push(node.val);
    traversal(node.right);
  };

  traversal(root);
  return values;
};

const arr = [1, null, 2, 3];
const root = TreeNode.fromArray(arr);

console.log("🚀 ~ inorderTraversal:", inorderTraversal(root));
