class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return ""

        let L = 0
        let count_t = {}
        let count_s = {}
        let res = [-1,-1]
        let resLen = Infinity

        for(let c of t){
            if(c in count_t){
                count_t[c] += 1
            }else{
                count_t[c] = 1
            }
        }

        let have = 0
        let need = Object.keys(count_t).length

        for (let R = 0; R < s.length; R++){
            let c = s[R]
            if(c in count_s){
                count_s[c] += 1
            }else{
                count_s[c] = 1
            }
            if(c in count_t && count_t[c] === count_s[c]){
                have++
            }

            while(have === need){
                if((R-L+1) < resLen){
                    res = [L, R]
                    resLen = R-L+1
                }
                count_s[s[L]]--
                if(s[L] in count_t && count_s[s[L]] < count_t[s[L]] ){
                    have--
                }
                L++
            }
            
        }
        let [l,r] = res
        return resLen === Infinity? "" : s.slice(l,r+1)
    }
}
