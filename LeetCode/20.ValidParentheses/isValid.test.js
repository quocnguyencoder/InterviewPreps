import { test } from "node:test";
import assert from "node:assert";
import { isValid } from "./isValid.js";

test("single valid", () => {
  const result = isValid("()");
  assert.strictEqual(result, true);
});

test("multiple valid", () => {
  const result = isValid("()[]{}");
  assert.strictEqual(result, true);
});

test("nested valid", () => {
  const result = isValid("(({{}}))");
  assert.strictEqual(result, true);
});

test("single invalid", () => {
  const result = isValid("(]");
  assert.strictEqual(result, false);
});

test("invalid nested", () => {
  const result = isValid("(())))");
  assert.strictEqual(result, false);
});
