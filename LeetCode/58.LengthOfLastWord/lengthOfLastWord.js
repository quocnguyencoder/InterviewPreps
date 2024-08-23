/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLastWord = function (s) {
  // loop from the end of string
  // if not space - add to lastword
  // else
  // - if lastword empty - continue
  // - else return lastword
  let lastword = "";
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      lastword += s[i];
    } else {
      if (lastword) break;
    }
  }
  return lastword.length;
};

console.log(
  "🚀 ~ lengthOfLastWord ~ lengthOfLastWord:",
  lengthOfLastWord("Hello world")
);
