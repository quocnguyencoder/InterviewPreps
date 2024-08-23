import { test } from "node:test";
import assert from "node:assert";
import { longestCommonPrefix } from "./longestCommonPrefix.js";

test("has result", () => {
  const result = longestCommonPrefix(["flower", "flow", "flight"]);
  assert.strictEqual(result, "fl");
});

test("no result", () => {
  const result = longestCommonPrefix(["dog", "racecar", "car"]);
  assert.strictEqual(result, "");
});

test("no result empty", () => {
  const result = longestCommonPrefix([""]);
  assert.strictEqual(result, "");
});
