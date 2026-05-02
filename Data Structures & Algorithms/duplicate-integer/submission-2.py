class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        dict_table = {}
        for n in nums:
            if n in dict_table:
                dict_table[n] += 1
            else:
                dict_table[n] = 1
        
        for n in dict_table:
            if dict_table[n] > 1:
                return True
        return False