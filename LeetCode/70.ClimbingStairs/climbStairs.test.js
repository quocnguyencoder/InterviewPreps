import { test } from "node:test";
import assert from "node:assert";
import { climbStairs } from "./climbStairs.js";

test("2", () => {
  const result = climbStairs(2);
  assert.equal(result, 2);
});

test("3", () => {
  const result = climbStairs(3);
  assert.equal(result, 3);
});
