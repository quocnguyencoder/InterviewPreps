/**
 * Converts a Roman numeral string to an integer.
 *
 * @param {string} s - The Roman numeral string.
 * @returns {number} - The corresponding integer value.
 */
const romanToInteger = (s) => {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = romans[s[s.length - 1]];

  for (let i = s.length - 2; i >= 0; i--) {
    const currChar = s[i];
    const preChar = s[i + 1];
    if (romans[currChar] < romans[preChar]) {
      result -= romans[currChar];
    } else {
      result += romans[currChar];
    }
  }

  return result;
};
export { romanToInteger };
