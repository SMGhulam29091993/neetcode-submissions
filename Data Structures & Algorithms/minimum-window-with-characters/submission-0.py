class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if t == "":
            return ""
        
        countT = {}
        countS = {}

        for c in t:
            countT[c] = countT.get(c,0)+1

        L = 0
        res = [-1,-1]
        resLen = float('inf')
        have = 0
        need = len(countT)

        for R in range(len(s)):
            c = s[R]

            countS[c] = countS.get(c,0)+1

            if c in countT and countS[c] == countT[c]:
                have += 1

            while have == need:
                if (R - L + 1) < resLen:
                    res = [L,R]
                    resLen = R - L + 1
                countS[s[L]] -= 1

                if s[L] in countT and countS[s[L]] < countT[s[L]]:
                    have -= 1

                L += 1
        l,r = res
        return s[l:r+1] if resLen != float('inf') else ""
