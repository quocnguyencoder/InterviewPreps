import { test } from "node:test";
import assert from "node:assert";
import { addBinary } from "./addBinary.js";

test("case 1", () => {
  const result = addBinary("11", "1");
  assert.strictEqual(result, "100");
});

test("case 2", () => {
  const result = addBinary("1010", "1011");
  assert.strictEqual(result, "10101");
});

test("case 3", () => {
  const result = addBinary("0", "0");
  assert.strictEqual(result, "0");
});

test("case 4", () => {
  const result = addBinary("1111", "1");
  assert.strictEqual(result, "10000");
});

test("case 5", () => {
  const result = addBinary("1101", "101");
  assert.strictEqual(result, "10010");
});

test("case 6", () => {
  const result = addBinary("111", "111");
  assert.strictEqual(result, "1110");
});

test("case 7", () => {
  const result = addBinary("100", "110010");
  assert.strictEqual(result, "110110");
});

test("case 8", () => {
  const result = addBinary("111111", "1");
  assert.strictEqual(result, "1000000");
});

test("case 9", () => {
  const result = addBinary("1010101", "1010101");
  assert.strictEqual(result, "10101010");
});

test("case 10", () => {
  const result = addBinary("0", "1");
  assert.strictEqual(result, "1");
});
