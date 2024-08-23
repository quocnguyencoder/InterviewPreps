import { test } from "node:test";
import assert from "node:assert";
import { romanToInteger } from "./converter.js";

test("I = 1", () => {
  const result = romanToInteger("I");
  assert.strictEqual(result, 1);
});

test("III = 3", () => {
  const result = romanToInteger("III");
  assert.strictEqual(result, 3);
});

test("LVIII = 58", () => {
  const result = romanToInteger("LVIII");
  assert.strictEqual(result, 58);
});

test("MCMXCIV = 1994", () => {
  const result = romanToInteger("MCMXCIV");
  assert.strictEqual(result, 1994);
});

test("MCDLXXVI = 1476", () => {
  const result = romanToInteger("MCDLXXVI");
  assert.strictEqual(result, 1476);
});
