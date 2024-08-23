/**
 *
 * @param {number[]} nums
 * @param {number} val
 * @returns {number} k
 *
 * */
export const removeElement = (nums, val) => {
  let index = 0;

  while (nums[index] !== undefined) {
    if (nums[index] === val) {
      nums.splice(index, 1);
    } else {
      index++;
    }
  }

  return nums.length;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
console.log("🚀 ~ removeElement:", removeElement(nums, 2));
console.log("🚀 ~ nums:", nums);
