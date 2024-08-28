import { test } from "node:test";
import assert from "node:assert";
import { maxProfit } from "./maxProfit.js";

test("case 1", () => {
  const prices = [7, 1, 5, 3, 6, 4];
  const result = maxProfit(prices);
  assert.equal(result, 5);
});
test("case 2", () => {
  const prices = [7, 6, 4, 3, 1];
  const result = maxProfit(prices);
  assert.equal(result, 0);
});
