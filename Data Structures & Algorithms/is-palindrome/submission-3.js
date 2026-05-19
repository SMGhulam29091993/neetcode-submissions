class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0
        let r = s.length-1
        while (l < r){
            while (l < r && !/^[a-z0-9]$/.test(s[l].toLowerCase())){
                l++
            }
            while(l < r && !/^[a-z0-9]$/.test(s[r].toLowerCase())){
                r--
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()){
                return false
            }
            l++
            r--
        }
        return true
    }
}
