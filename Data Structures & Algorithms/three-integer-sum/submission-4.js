class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b)
        let res = []

        for(let i = 0; i < nums.length; i++){
            if (i > 0 && nums[i] === nums[i-1]){
                continue;
            }
            let j = i + 1
            let k = nums.length - 1
            while(j < k){
                if (nums[j] + nums[k] + nums[i] < 0 ){
                    j++
                }else if(nums[j] + nums[k] + nums[i] > 0){
                    k--
                }else{
                    res.push([nums[i], nums[j], nums[k]])
                    j++
                    k--

                    while ( j < k && nums[j] === nums[j-1]){
                        j++
                    }
                    while(j<k && nums[k] === nums[k+1]){
                        k--
                    }

                    
                }
            }
        }
        return res
    }
}
