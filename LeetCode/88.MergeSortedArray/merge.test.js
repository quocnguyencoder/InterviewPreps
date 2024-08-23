import assert from "node:assert";
import { test } from "node:test";
import { merge } from "./merge.js";

// Test case 1
test("case 1", () => {
  const nums1 = [1, 2, 3, 0, 0, 0],
    m = 3,
    nums2 = [2, 5, 6],
    n = 3;
  merge(nums1, m, nums2, n);
  assert.deepEqual(nums1, [1, 2, 2, 3, 5, 6]);
});

// Test case 2: nums2 is empty, nums1 should remain unchanged
test("case 2", () => {
  const nums1 = [1],
    m = 1,
    nums2 = [],
    n = 0;
  merge(nums1, m, nums2, n);
  assert.deepEqual(nums1, [1]);
});

// Test case 3: nums1 is empty (m = 0), nums1 should become nums2
test("case 3", () => {
  const nums1 = [0],
    m = 0,
    nums2 = [1],
    n = 1;
  merge(nums1, m, nums2, n);
  assert.deepEqual(nums1, [1]);
});

// Test case 4: nums1 and nums2 both have one element
test("case 4", () => {
  const nums1 = [2, 0],
    m = 1,
    nums2 = [1],
    n = 1;
  merge(nums1, m, nums2, n);
  assert.deepEqual(nums1, [1, 2]);
});

// Test case 5: nums1 has all smaller elements than nums2
test("case 5", () => {
  const nums1 = [1, 2, 3, 0, 0, 0],
    m = 3,
    nums2 = [4, 5, 6],
    n = 3;
  merge(nums1, m, nums2, n);
  assert.deepEqual(nums1, [1, 2, 3, 4, 5, 6]);
});

// Test case 6: nums2 has all smaller elements than nums1
test("case 6", () => {
  const nums1 = [4, 5, 6, 0, 0, 0],
    m = 3,
    nums2 = [1, 2, 3],
    n = 3;
  merge(nums1, m, nums2, n);
  assert.deepEqual(nums1, [1, 2, 3, 4, 5, 6]);
});

// Test case 7: nums1 and nums2 are both empty
test("case 7", () => {
  const nums1 = [],
    m = 0,
    nums2 = [],
    n = 0;
  merge(nums1, m, nums2, n);
  assert.deepEqual(nums1, []);
});
