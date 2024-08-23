/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
export const merge = (nums1, m, nums2, n) => {
  // merge 2 array then sort
  // O((n+m)*log(m+n))
  nums1.splice(m, n);
  nums1.push(...nums2);
  nums1.sort(function (a, b) {
    // if not have this func, the sort will not correct for number
    return a - b;
  });
};

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;

console.log("🚀 ~ merge ~ merge:", merge(nums1, m, nums2, n));
console.log(nums1);
