class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if not nums:
            return -1

        s = 0
        e = len(nums)-1

        while s <= e:
            mid = (s + e)// 2

            if nums[mid] < target:
                s = mid+1
            elif nums[mid] > target:
                e = mid - 1
            else:
                return mid
        return -1