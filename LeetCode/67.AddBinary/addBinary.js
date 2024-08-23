/**
 *
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
export const addBinary = (a, b) => {
  /**
   * * Rules:
   * 1 + 1 = 0 - carry 1
   * 1 + 0 = 1
   * 0 + 1 = 1
   * 0 + 0 = 0
   * * if carry 1
   * 1 + 1 = 1 - carry 1
   */

  /**
   * - carry - int
   * - result - string
   */

  const results = {
    "1-1-0": {
      res: "0",
      carry: 1,
    },
    "1-1-1": {
      res: "1",
      carry: 1,
    },
    "1-0-0": {
      res: "1",
      carry: 0,
    },
    "1-0-1": {
      res: "0",
      carry: 1,
    },
    "0-1-0": {
      res: "1",
      carry: 0,
    },
    "0-1-1": {
      res: "0",
      carry: 1,
    },
    "0-0-0": {
      res: "0",
      carry: 0,
    },
    "0-0-1": {
      res: "1",
      carry: 0,
    },
  };

  let result = "";
  let carrier = 0;
  let index = (a.length > b.length ? a.length : b.length) - 1;
  if (a.length > b.length) {
    b = "0".repeat(a.length - b.length).concat(b);
  } else {
    a = "0".repeat(b.length - a.length).concat(a);
  }

  while (index >= 0) {
    const { res, carry } = results[`${a[index]}-${b[index]}-${carrier}`];
    carrier = carry;
    result = res.concat(result);
    index--;
  }

  if (carrier) {
    result = "1".concat(result);
  }

  return result;
};
console.log("🚀 ~ addBinary ~ addBinary:", addBinary("1010", "1011"));
