class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        s = 1
        e = max(piles)
        res = e
        while s <= e:
            m = (s+e)//2
            hour = 0
            for pile in piles:
                hour += math.ceil(pile/m)

            if hour <= h:
                res = m
                e = m - 1
            else:
                s = m + 1
        return res

