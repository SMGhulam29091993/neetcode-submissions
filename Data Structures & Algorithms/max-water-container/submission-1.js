class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let r = heights.length-1
        let l = 0

        let maxSize = -99999999
        while(l < r){
            let amount = (r - l) * (Math.min(heights[l], heights[r]))
            maxSize = Math.max(maxSize, amount)
            if (heights[l] < heights[r]){
                l++
            }else{
                r--
            }
        }
        return maxSize
    }
}
