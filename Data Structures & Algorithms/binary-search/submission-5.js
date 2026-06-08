class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if(nums.length === 0) return -1

        let start = 0
        let end = nums.length -1 

        while(start <= end){
            let mid = Math.trunc((start + end)/2)

            if (target < nums[mid]) {
                end = mid - 1
            }else if(target > nums[mid]){
                start = mid + 1
            }else{
                return mid
            }
        }
        return -1
    }
}
