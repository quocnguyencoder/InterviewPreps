/**
 * @param {number[]} prices
 * @returns {number}
 */
export const maxProfit = (prices) => {
  /**
   * * TLE - not a solution for large array
   * * 1> for each day except day 0, find profit
   */
  // let max = 0;
  // for (let i = 1; i < prices.length; ++i) {
  //   const slicePrices = prices.slice(0, i);
  //   for (let price of slicePrices) {
  //     const profit = prices[i] - price;
  //     if (profit > max) {
  //       max = profit;
  //     }
  //   }
  // }
  // return max;

  /**
   * * 2>
      track max_price and max_profit
      loop from the end of arr
      if a price is greater than max_price
      update max_price
      else - cal profit = max_price - current price
      - if > max_profit - update max profit
      T:O(n) - S:O(1)
   */

  let max_profit = 0;
  let max_price = 0;

  for (let i = prices.length - 1; i >= 0; i--) {
    const current_price = prices[i];
    if (current_price > max_price) {
      max_price = current_price;
    } else {
      const profit = max_price - current_price;
      if (profit > max_profit) {
        max_profit = profit;
      }
    }
  }
  return max_profit;
};
console.log("🚀 ~ maxProfit ~ maxProfit:", maxProfit([7, 1, 5, 3, 6, 4]));
console.log("🚀 ~ maxProfit ~ maxProfit:", maxProfit([7, 6, 4, 3, 1]));
