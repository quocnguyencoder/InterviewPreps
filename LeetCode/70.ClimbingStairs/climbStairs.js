/**
 *
 * @param {number} n
 * @returns {number}
 */
export const climbStairs = (n) => {
  // let a = 1,
  //   b = 0,
  //   temp;

  // while (n >= 0) {
  //   temp = a;
  //   a += b;
  //   b = temp;
  //   n--;
  // }

  // return b;
  const memo = Array.from({ length: n + 1 });
  memo[n] = 1;
  memo[n - 1] = 1;

  for (let i = n - 2; i >= 0; --i) {
    memo[i] = memo[i + 1] + memo[i + 2];
  }

  return memo[0];
};
console.log("🚀 ~ climbStairs:", climbStairs(2));
