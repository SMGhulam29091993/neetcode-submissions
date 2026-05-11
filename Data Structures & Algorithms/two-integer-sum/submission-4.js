class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {}
        for (let i = 0; i < nums.length; i++){
            let complement = target - nums[i]
            if (complement in seen){
                return [seen[complement],i]
            }
            seen[nums[i]] = i
        }
    }
}
