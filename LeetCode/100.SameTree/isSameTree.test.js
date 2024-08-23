import { test } from "node:test";
import assert from "node:assert";
import { isSameTree } from "./isSameTree.js";
import { TreeNode } from "./TreeNode.js";

test("isSameTree with identical trees", () => {
  const p = new TreeNode([1, 2, 3]);
  const q = new TreeNode([1, 2, 3]);
  assert.strictEqual(isSameTree(p, q), true);
});

test("isSameTree with different trees", () => {
  const p = new TreeNode([1, 2]);
  const q = new TreeNode([1, null, 2]);
  assert.strictEqual(isSameTree(p, q), false);
});

test("isSameTree with one empty tree", () => {
  const p = null;
  const q = new TreeNode([1, 2, 3]);
  assert.strictEqual(isSameTree(p, q), false);
});

test("isSameTree with both empty trees", () => {
  const p = null;
  const q = null;
  assert.strictEqual(isSameTree(p, q), true);
});

test("isSameTree with different structures but same values", () => {
  const p = new TreeNode([1, 2, null, 3]);
  const q = new TreeNode([1, null, 2, null, 3]);
  assert.strictEqual(isSameTree(p, q), false);
});
