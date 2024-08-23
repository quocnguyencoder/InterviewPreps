/**
 * Merges two sorted arrays (nums1 and nums2) into a single sorted array in-place.
 * The first array, nums1, has enough space to accommodate the elements of both arrays.
 *
 * @param {number[]} nums1 - The first sorted array, which has a length of m + n.
 *                           The first m elements are the elements to be merged, and the last n elements are 0.
 * @param {number} m - The number of elements in nums1 that need to be merged.
 * @param {number[]} nums2 - The second sorted array, with n elements to be merged into nums1.
 * @param {number} n - The number of elements in nums2.
 * @return {void} - The function does not return anything; it modifies nums1 in-place.
 */
export const merge = (nums1, m, nums2, n) => {
  // Initialize two pointers: id1 to track the last valid element in nums1, and id2 to track the last element in nums2
  let id1 = m - 1,
    id2 = n - 1;

  // Loop through nums1 in reverse order, starting from the last position (m + n - 1)
  for (let i = m + n - 1; i >= 0; i--) {
    // If id2 is -1, all elements from nums2 have been merged, so we can exit the loop
    if (id2 === -1) {
      break;
    }

    // Get the current elements from nums1 and nums2 that the pointers are referencing
    let curr1 = nums1[id1],
      curr2 = nums2[id2];

    // If the current element in nums1 is less than or equal to the current element in nums2,
    // or if id1 is out of bounds (i.e., all elements from nums1 have been placed),
    // set nums1[i] to the current element from nums2 and decrement id2.
    if (curr1 <= curr2 || id1 === -1) {
      nums1[i] = curr2;
      id2--;
    }
    // Otherwise, set nums1[i] to the current element from nums1 and decrement id1.
    else {
      nums1[i] = curr1;
      id1--;
    }
  }
};

// Example usage:
const nums1 = [1, 2, 3, 0, 0, 0], // nums1 has 3 valid elements and 3 extra spaces to accommodate nums2
  m = 3, // The number of valid elements in nums1
  nums2 = [2, 5, 6], // nums2 has 3 elements to be merged into nums1
  n = 3; // The number of elements in nums2

// Call the merge function to merge nums2 into nums1
console.log("🚀 ~ merge ~ merge:", merge(nums1, m, nums2, n)); // The merge function does not return a value
console.log(nums1); // Output the modified nums1, which should now be [1, 2, 2, 3, 5, 6]
