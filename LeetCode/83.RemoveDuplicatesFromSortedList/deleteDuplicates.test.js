import { test } from "node:test";
import assert from "node:assert";
import { ListNode, deleteDuplicates } from "./deleteDuplicates.js"; // Replace with the correct path

// Helper function to create a linked list from an array
function arrayToList(arr) {
  if (arr.length === 0) return null;
  return new ListNode(arr);
}

// Helper function to convert a linked list to an array
function listToArray(list) {
  const result = [];
  let current = list;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// Test cases
test("should remove duplicates from sorted linked list", () => {
  let list = arrayToList([1, 1, 2]);
  let result = deleteDuplicates(list);
  assert.deepStrictEqual(listToArray(result), [1, 2]);
});

test("should handle multiple duplicates", () => {
  let list = arrayToList([1, 1, 2, 3, 3]);
  let result = deleteDuplicates(list);
  assert.deepStrictEqual(listToArray(result), [1, 2, 3]);
});

test("should handle no duplicates", () => {
  let list = arrayToList([1, 2, 3]);
  let result = deleteDuplicates(list);
  assert.deepStrictEqual(listToArray(result), [1, 2, 3]);
});

test("should handle an empty list", () => {
  let list = arrayToList([]);
  let result = deleteDuplicates(list);
  assert.strictEqual(result, null);
});

test("should handle a list with one element", () => {
  let list = arrayToList([1]);
  let result = deleteDuplicates(list);
  assert.deepStrictEqual(listToArray(result), [1]);
});

test("should handle all elements being the same", () => {
  let list = arrayToList([2, 2, 2, 2]);
  let result = deleteDuplicates(list);
  assert.deepStrictEqual(listToArray(result), [2]);
});

test("should handle non-consecutive duplicates", () => {
  let list = arrayToList([1, 2, 2, 3, 3, 4, 5, 5]);
  let result = deleteDuplicates(list);
  assert.deepStrictEqual(listToArray(result), [1, 2, 3, 4, 5]);
});
