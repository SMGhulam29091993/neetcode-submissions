class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:

        window = set()
        L = 0

        for R in range(len(nums)):
            if R - L > k:
                window.remove(nums[L])
                L += 1
            if nums[R] in window:
                return True
            window.add(nums[R])
        return False


        # T -> O(n.k) and S -> O(1)
        # for l in range(len(nums)):
        #     for r in range(l+1, min(len(nums), l + k + 1)):
        #         if nums[l] == nums[r]:
        #             return True
        # return False
