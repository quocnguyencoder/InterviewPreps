/**
 *
 * @param {number[]} digits
 * @returns {number[]}
 */
export const plusOne = (digits) => {
  // initial carrier = 1
  // loop through array in reverse order
  // if carrier = 0 - return result
  // ele = ele + carrier
  // if have carrier - set carrier
  let result = [];
  let carrier = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (!carrier) {
      result.unshift(...digits.slice(0, i + 1));
      return result;
    }

    let res = digits[i] + carrier;
    if (res >= 10) {
      result.unshift(res % 10);
    } else {
      result.unshift(res);
      carrier = 0;
    }
  }
  if (carrier) {
    result.unshift(1);
  }
  return result;
};

console.log("🚀 ~ plusOne ~ plusOne:", plusOne([1, 2, 3]));
