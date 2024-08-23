import { test } from "node:test";
import assert from "node:assert";
import { maxDepth } from "./maxDepth.js";
import { TreeNode } from "./TreeNode.js";

test("case 1", () => {
  const tree = new TreeNode([1]);
  assert.strictEqual(maxDepth(tree), 1);
});

test("case 2", () => {
  const tree = new TreeNode([1, 2, 3]);
  assert.strictEqual(maxDepth(tree), 2);
});

test("case 4", () => {
  const tree = new TreeNode([1, 2, 3, 4, 5, 6, 7]);
  assert.strictEqual(maxDepth(tree), 3);
});

test("case 5", () => {
  const tree = new TreeNode([1, 2, null, 3, null, 4, null, 5]);
  assert.strictEqual(maxDepth(tree), 5);
});

test("case 6", () => {
  const tree = new TreeNode([1, 2, 3, 4, 5, null, 6, null, null, 7]);
  assert.strictEqual(maxDepth(tree), 4);
});
