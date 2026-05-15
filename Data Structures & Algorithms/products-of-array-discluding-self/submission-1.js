class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length
        let res = Array(n).fill(1)

        let prefix = 1
        for(let i = 0; i < n; i++){
            res[i] = prefix
            prefix = prefix * nums[i]
        }

        let postfix = 1
        for(let i = n-1; i >= 0; i--){
            res[i] = res[i] * postfix
            postfix = postfix * nums[i]
        }
        return res
    }
}
