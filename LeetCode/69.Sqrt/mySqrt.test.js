import assert from "node:assert";
import { test } from "node:test";
import { mySqrt } from "./mySqrt.js";

test("4", () => {
  const result = mySqrt(4);
  assert.equal(result, Math.floor(Math.sqrt(4)));
});

test("8", () => {
  const result = mySqrt(8);
  assert.equal(result, Math.floor(Math.sqrt(8)));
});

test("0", () => {
  const result = mySqrt(0);
  assert.equal(result, Math.floor(Math.sqrt(0)));
});

test("1", () => {
  const result = mySqrt(1);
  assert.equal(result, Math.floor(Math.sqrt(1)));
});

test("16", () => {
  const result = mySqrt(16);
  assert.equal(result, Math.floor(Math.sqrt(16)));
});

test("25", () => {
  const result = mySqrt(25);
  assert.equal(result, Math.floor(Math.sqrt(25)));
});

test("26", () => {
  const result = mySqrt(26);
  assert.equal(result, Math.floor(Math.sqrt(26)));
});
