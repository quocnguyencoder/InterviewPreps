import { TreeNode } from "./TreeNode.js";

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  console.log("🚀 ~ sortedArrayToBST ~ nums:", nums);

  //if !mid el - null
  //let currentNode = mid ele Node
  // currentNode.left = find next node([lower-half])
  // currentNode.right = find next node([upper-half])
  //find next node - array

  if (nums.length === 0) {
    return null;
  }
  const mid = Math.floor((nums.length - 1) / 2);
  let currentNode = new TreeNode(nums[mid]);

  currentNode.left = sortedArrayToBST(nums.slice(0, mid));
  currentNode.right = sortedArrayToBST(nums.slice(mid + 1));

  return currentNode;
};

console.log(
  "🚀 ~ sortedArrayToBST ~ function:",
  sortedArrayToBST([-10, -3, 0, 5, 9])
);
