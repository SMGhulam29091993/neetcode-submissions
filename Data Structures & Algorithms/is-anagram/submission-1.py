class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        length_of_s, length_of_t = len(s), len(t)
        if length_of_s != length_of_t:
            return False
        # check frequency of letters
        count = [0] * 26

        for ch in s:
            idx = ord(ch) - ord('a')
            count[idx] += 1
        
        for ch in t:
            idx = ord(ch) - ord('a')
            count[idx] -= 1
        
        for i in count:
            if i != 0:
                return False
        return True