class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        hasCompliment = {}
        for i, num in enumerate(numbers):
            compliment = target - num
            if compliment in hasCompliment:
                return [hasCompliment[compliment]+1,i+1]
            else:
                hasCompliment[num] = i
        return []