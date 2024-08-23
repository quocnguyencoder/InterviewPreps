import assert from "node:assert";
import { test } from "node:test";
import { plusOne } from "./plusOne.js";

test("case 1", () => {
  const result = plusOne([1, 2, 3]);
  assert.strictEqual(JSON.stringify(result), JSON.stringify([1, 2, 4]));
});

test("case 2", () => {
  const result = plusOne([4, 3, 2, 1]);
  assert.strictEqual(JSON.stringify(result), JSON.stringify([4, 3, 2, 2]));
});

test("case 3", () => {
  const result = plusOne([9]);
  assert.strictEqual(JSON.stringify(result), JSON.stringify([1, 0]));
});
