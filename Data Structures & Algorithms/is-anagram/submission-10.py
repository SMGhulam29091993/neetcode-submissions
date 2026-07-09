class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        len_s, len_t = len(s),len(t)

        if len_s != len_t:
            return False
        
        freq = [0] * 26

        for ch in s:
            idx = ord(ch) - ord('a')
            freq[idx] += 1
        
        for ch in t:
            idx = ord(ch) - ord('a')
            freq[idx] -= 1

        for i in freq:
            if i != 0:
                return False
        return True

        #Dictionary approach below with Time Complexity O(n) and space complexity O(n) 
        # s_freq,t_freq = {},{}

        # for s_el, t_el in zip(s,t):
        #     if s_el in s_freq:
        #         s_freq[s_el] += 1
        #     else:
        #         s_freq[s_el] = 1
            
        #     if t_el in t_freq: 
        #         t_freq[t_el] += 1
        #     else: 
        #         t_freq[t_el] = 1
        
        # for i in s_freq:
        #     if s_freq[i] != t_freq.get(i,0):
        #         return False
        # return True
        
