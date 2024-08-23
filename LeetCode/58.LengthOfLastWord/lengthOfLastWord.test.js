import assert from "node:assert";
import { test } from "node:test";
import { lengthOfLastWord } from "./lengthOfLastWord.js";

test("case 1", () => {
  const result = lengthOfLastWord("Hello World");
  assert.strictEqual(result, 5);
});
test("case 2", () => {
  const result = lengthOfLastWord("   fly me   to   the moon  ");
  assert.strictEqual(result, 4);
});
test("case 3", () => {
  const result = lengthOfLastWord("luffy is still joyboy");
  assert.strictEqual(result, 6);
});
