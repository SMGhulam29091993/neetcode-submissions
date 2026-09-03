class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        dicts = {}

        for n in nums:          
            dicts[n] = dicts.get(n,0)+1

        for n in nums:
            if dicts[n] > 1:
                return True

        return False

        