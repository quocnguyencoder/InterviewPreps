/**
 * @param {number} numRows
 * @return {number[][]}
 */
export const generate = (numRows) => {
  let result = [];
  // Returns value of Binomial Coefficient C(n, k)
  function binomialCoeff(n, k) {
    let res = 1;

    // Since C(n, k) = C(n, n-k)
    if (k > n - k) k = n - k;

    // Calculate value of
    // [n * (n-1) *---* (n-k+1)] / [k * (k-1) *----* 1]
    for (let i = 0; i < k; ++i) {
      res *= n - i;
      res /= i + 1;
    }

    return res;
  }
  for (let line = 0; line < numRows; line++) {
    let currentLine = [];
    for (let i = 0; i <= line; i++) {
      currentLine.push(binomialCoeff(line, i));
    }
    result.push(currentLine);
  }
  return result;
};
console.log("🚀 ~ generate ~ generate:", generate(5));
