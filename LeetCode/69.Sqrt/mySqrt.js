/**
 *
 * @param {number} x
 * @returns {number}
 */
export const mySqrt = (x) => {
  if (x === 0 || x === 1) {
    return x;
  }

  let start = 0;
  let end = x;
  let result = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid; // Found the exact square root
    } else if (square < x) {
      start = mid + 1;
      result = mid; // Store the current best guess
    } else {
      end = mid - 1;
    }
  }

  return result; // Return the closest integer square root
};

console.log("🚀 ~ mySqrt(2):", mySqrt(2)); // 1
console.log("🚀 ~ mySqrt(4):", mySqrt(4)); // 2
console.log("🚀 ~ mySqrt(8):", mySqrt(8)); // 2
console.log("🚀 ~ mySqrt(16):", mySqrt(16)); // 4
console.log("🚀 ~ mySqrt(25):", mySqrt(25)); // 5
