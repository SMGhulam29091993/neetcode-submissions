class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {}
        let maxFreq = 0
        let L = 0
        let res = 0

        for (let R = 0; R < s.length; R++){
            if(s[R] in count){
                count[s[R]] += 1
            }else{
                count[s[R]] = 1
            }

            let sFreq = count[s[R]]
            maxFreq = Math.max(maxFreq,sFreq)

            while((R-L+1) - maxFreq > k){
                count[s[L]] -= 1
                L += 1
            }
            res = Math.max(res,(R-L+1))
        }
        return res
    }
}
