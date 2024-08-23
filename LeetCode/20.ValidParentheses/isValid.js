import { Stack } from "./stack.js";

/**
 *
 * @param {string} s
 * @returns {boolean}
 */
export const isValid = (s) => {
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    //if open
    if (brackets.hasOwnProperty(s[i])) {
      stack.push(i);
    }
    // closing cases
    else {
      const stackPeek = stack.peek();
      // closing without opening
      if (typeof stackPeek !== "number" || brackets[s[stackPeek]] !== s[i]) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0;
};
