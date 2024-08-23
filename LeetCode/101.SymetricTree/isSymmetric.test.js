import { test } from "node:test";
import assert from "node:assert";
import { isSymmetric } from "./isSymmetric.js";
import { TreeNode } from "./TreeNode.js";

test("symmetric tree with single node", () => {
  const tree = new TreeNode([1]);
  assert.strictEqual(isSymmetric(tree), true);
});

test("symmetric tree with multiple levels", () => {
  const tree = new TreeNode([1, 2, 2, 3, 4, 4, 3]);
  assert.strictEqual(isSymmetric(tree), true);
});

test("asymmetric tree with multiple levels", () => {
  const tree = new TreeNode([1, 2, 2, null, 3, null, 3]);
  assert.strictEqual(isSymmetric(tree), false);
});

test("empty tree", () => {
  const tree = new TreeNode([]);
  assert.strictEqual(isSymmetric(tree), true); // An empty tree is considered symmetric
});

test("symmetric tree with different structure", () => {
  const tree = new TreeNode([1, 2, 2, null, 3, 3, null]);
  assert.strictEqual(isSymmetric(tree), true);
});

test("asymmetric tree with deeper levels", () => {
  const tree = new TreeNode([1, 2, 2, 3, 4, 4, 3, null, 5, 6, 6, 5, null]);
  assert.strictEqual(isSymmetric(tree), false);
});

test("tree with only left children", () => {
  const tree = new TreeNode([1, 2, null, 3, null, null, null]);
  assert.strictEqual(isSymmetric(tree), false);
});
