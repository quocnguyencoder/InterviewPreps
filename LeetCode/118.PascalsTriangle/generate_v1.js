/**
 * @param {number} numRows
 * @return {number[][]}
 */
export const generate = (numRows) => {
  let result = [];

  for (let line = 0; line < numRows; line++) {
    let currentLine = [];
    for (let i = 0; i <= line; i++) {
      let elValue = 1;
      if (line !== i && i !== 0) {
        elValue = result[line - 1][i - 1] + result[line - 1][i];
      }
      currentLine.push(elValue);
    }
    result.push(currentLine);
  }
  return result;
};
console.log("🚀 ~ generate ~ generate:", generate(5));
