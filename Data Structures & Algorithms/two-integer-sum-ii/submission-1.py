class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # two pointer approach
        l = 0 
        r = len(numbers) - 1
        while l < r:
            currSum = numbers[l] + numbers[r]
            if currSum == target:
                return [l+1, r+1]
            elif currSum < target:
                l += 1
            else:
                r -= 1
                
        # hasCompliment = {}
        # for i, num in enumerate(numbers):
        #     compliment = target - num
        #     if compliment in hasCompliment:
        #         return [hasCompliment[compliment]+1,i+1]
        #     else:
        #         hasCompliment[num] = i
        # return []