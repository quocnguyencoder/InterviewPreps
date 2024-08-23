/**
 *
 * @param {number[]} nums
 * @returns {number} - index of peak
 */
export const findPeak = (nums) => {
  let [left, right] = [0, nums.length - 1];
  while (left < right) {
    const mid = (left + right) >> 1;
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
console.log("🚀 ~ findPeak:", findPeak([1, 2, 3, 1]));
