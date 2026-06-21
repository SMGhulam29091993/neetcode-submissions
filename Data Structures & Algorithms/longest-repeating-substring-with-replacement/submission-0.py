class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = {}
        L = 0
        maxFreq = 0
        res = 0

        for R in range(len(s)):
            count[s[R]] = count.get(s[R],0) + 1
            s_freq = count[s[R]]
            maxFreq = max(maxFreq, s_freq)

            while (R-L+1) - maxFreq > k:
                count[s[L]] -= 1
                L += 1
            res = max(res, (R-L+1))
        return res