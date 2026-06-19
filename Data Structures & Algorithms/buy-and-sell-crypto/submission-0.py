class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        L,profit = 0,0

        for R in range(1, len(prices)):
            currProfit = prices[R] - prices[L]
            if currProfit < 0:
                L = R
            profit = max(profit,currProfit)
        return profit