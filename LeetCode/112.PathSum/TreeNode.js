export class TreeNode {
  constructor(val, left = null, right = null) {
    if (Array.isArray(val)) {
      return TreeNode.fromArray(val);
    }
    this.val = val;
    this.left = left;
    this.right = right;
  }

  // Create a binary tree from an array
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
}
