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

  const combinedRomans = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let result = 0;
  let index = 0;

  while (index < s.length) {
    const currChar = s[index];
    const combinedChars = s.slice(index, index + 2);

    if (combinedRomans[combinedChars]) {
      result += combinedRomans[combinedChars];
      index += 2;
    } else {
      result += romans[currChar];
      index += 1;
    }
  }

  return result;
};

export { romanToInteger };
