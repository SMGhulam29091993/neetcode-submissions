class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length){
            return false
        }

        let count = new Array(26).fill(0)
        let idx = 0
        for (let ch of s){
            idx = ch.charCodeAt(0) - 'a'.charCodeAt(0)
            count[idx] += 1
        }

        for (let ch of t){
            idx = ch.charCodeAt(0) - 'a'.charCodeAt(0)
            count[idx] -= 1
        }

        for(let i of count){
            if (i !== 0){
                return false
            }
        }
        return true
    }
}
