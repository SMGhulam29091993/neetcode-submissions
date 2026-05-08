class Solution:
    def isPalindrome(self, s: str) -> bool:
        if len(s) == 0:
            return False

        if len(s) == 1:
            return True

        res = []
        
        for a in s:
            if a.isalnum():
                res.append(a.lower())
        z = "".join(res)
        return z == z[::-1]


