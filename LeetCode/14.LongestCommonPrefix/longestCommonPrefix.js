/**
 *
 * @param {string[]} strs
 * @returns {string}
 */
export const longestCommonPrefix = (strs) => {
  // loop through strs
  // check current index of all element if they are the same
  // true -> update longest string
  // false -> break
  // * edge case: out of index when going through strs element

  let result = "";
  let index = 0;

  while (true) {
    let currentChar = strs[0][index];

    if (!currentChar) {
      break;
    }

    for (let i = 1; i < strs.length; i++) {
      if (strs[i][index] !== currentChar) {
        return result;
      }
    }
    result += currentChar;
    index += 1;
  }

  return result;
};
