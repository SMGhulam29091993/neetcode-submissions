class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        length_of_s, length_of_t = len(s), len(t)
        if length_of_s != length_of_t:
            return False
        
        s_freq,t_freq = {},{}

        for s_el, t_el in zip(s,t):
            if s_el in s_freq:
                s_freq[s_el] += 1
            else:
                s_freq[s_el] = 1
            
            if t_el in t_freq: 
                t_freq[t_el] += 1
            else: 
                t_freq[t_el] = 1
        
        for i in s_freq:
            if s_freq[i] != t_freq.get(i,0):
                return False
        return True
