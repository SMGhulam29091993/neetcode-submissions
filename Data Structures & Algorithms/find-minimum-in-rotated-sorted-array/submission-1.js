class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let s = 0
        let e = nums.length - 1

        while(s < e){
            let m = Math.trunc((s+e)/2)

            if (nums[m] > nums[e]){
                s = m + 1
            }else{
                e = m
            }
        }
        return nums[s]
    }
}
