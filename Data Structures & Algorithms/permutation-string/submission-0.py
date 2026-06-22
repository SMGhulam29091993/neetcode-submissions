class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False
        k = len(s1)

        L = 0
        count_1 = {}
        count_2 = {}

        for ch in s1:
            count_1[ch] = count_1.get(ch,0)+1
        
        for R in range(len(s2)):
            count_2[s2[R]] = count_2.get(s2[R],0)+1

            if R - L + 1 > k:
                count_2[s2[L]] -= 1

                if count_2[s2[L]] == 0:
                    del count_2[s2[L]]
                L += 1

            if count_1 == count_2:
                return True

        return False

