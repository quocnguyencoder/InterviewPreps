/**
 *
 * @param {string[]} strs
 * @returns {string}
 */
export const longestCommonPrefix = (strs) => {
  // find longest prefix of the first 2 ele
  // loop through strs at 3rd
  // find longest prefix of current longest and current str
  // if has longest -> set new longest -> continue
  // else end
  // O(n * L)

  const helper = (str1, str2) => {
    let prefix = "";
    const shorterStrLength =
      str1.length > str2.length ? str1.length : str2.length;
    for (let i = 0; i < shorterStrLength; i++) {
      if (str1[i] === str2[i]) {
        prefix += str1[i];
      } else {
        break;
      }
    }
    return prefix;
  };

  if (strs.length === 1) {
    return strs[0];
  }

  let result = helper(strs[0], strs[1]);

  for (let i = 2; i < strs.length; i++) {
    let prefix = helper(result, strs[i]);
    if (!prefix) {
      result = "";
      break;
    }

    result = prefix;
  }

  return result;
};
