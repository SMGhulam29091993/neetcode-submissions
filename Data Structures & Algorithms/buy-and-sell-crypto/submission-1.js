class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let L = 0
        let profit = 0

        for (let R = 0; R < prices.length; R++){
            let currProfit = prices[R] - prices[L]

            if (currProfit < 0){
                L = R
            }
            profit = Math.max(profit, currProfit)
        }
        return profit
    }
}
