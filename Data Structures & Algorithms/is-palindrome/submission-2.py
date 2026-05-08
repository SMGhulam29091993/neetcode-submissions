class Solution:
    def isPalindrome(self, s: str) -> bool:
        l = 0
        r = len(s)-1
        while l < r:
            while l < r and not s[l].isalnum():
                l +=1
            while l < r and not s[r].isalnum():
                r -= 1
            
            if s[l].lower() != s[r].lower():
                return False
            
            l += 1
            r -= 1
        return True

        # T=> O(n) and S=>O(n)
        # if len(s) == 0:
        #     return False

        # if len(s) == 1:
        #     return True

        # res = []
        
        # for a in s:
        #     if a.isalnum():
        #         res.append(a.lower())
        # s = "".join(res)
        # return s == s[::-1]


