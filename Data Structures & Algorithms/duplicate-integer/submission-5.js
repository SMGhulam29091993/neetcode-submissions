class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dic = {}
        for (let n of nums){
            if(n in dic){
                dic[n] +=1
            }else{
                dic[n] = 1
            }
        }
        for(const key in dic){
            if (dic[key] > 1){
                return true
            }
        }
        return false
    }
}


