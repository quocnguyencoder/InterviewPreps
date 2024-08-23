import { test } from "node:test";
import assert from "node:assert";
import { removeElement } from "./removeElement.js";

test("case 1", () => {
  let nums = [3, 2, 2, 3];
  let val = 3;
  let expectedNums = [2, 2]; // The expected array after removal
  let k = removeElement(nums, val);

  assert.strictEqual(k, expectedNums.length);
  assert.deepStrictEqual(nums.slice(0, k), expectedNums);
});

test("case 2", () => {
  let nums = [0, 1, 2, 2, 3, 0, 4, 2];
  let val = 2;
  let expectedNums = [0, 1, 3, 0, 4]; // The expected array after removal
  let k = removeElement(nums, val);

  assert.strictEqual(k, expectedNums.length);
  assert.deepStrictEqual(nums.slice(0, k), expectedNums);
});
