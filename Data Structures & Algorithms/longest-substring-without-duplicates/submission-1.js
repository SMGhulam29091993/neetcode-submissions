class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let length = 0
        let L = 0
        let charSet = new Set()

        for(let R = 0; R < s.length; R++){
            while (charSet.has(s[R])){
                charSet.delete(s[L])
                L += 1
            }
            charSet.add(s[R])
            length = Math.max(length, R-L+1)
        }
        return length;
    }
}
