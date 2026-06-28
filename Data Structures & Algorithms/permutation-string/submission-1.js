class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false

        let L = 0
        let k = s1.length
        let count_1 = {}
        let count_2 = {}

        for(let ch of s1){
            if (ch in count_1){
                count_1[ch] += 1
            }else{
                count_1[ch] = 1
            }
        }

        for(let R = 0; R < s2.length; R++){
            if(s2[R] in count_2){
                count_2[s2[R]] += 1
            }else{
                count_2[s2[R]] = 1
            }

            while((R-L+1) > k){
                count_2[s2[L]] -= 1
                if(count_2[s2[L]] === 0){
                    delete count_2[s2[L]]
                }
                L += 1
            }
            function isEqual(obj1,obj2){
                let keys_1 = Object.keys(obj1)
                let keys_2 = Object.keys(obj2)

                if(keys_1.length !== keys_2.length){
                    return false
                }

                for(let key of keys_1){
                    if (obj1[key] !== obj2[key]){
                        return false
                    }
                }
                return true
            }

            if(isEqual(count_1, count_2)) return true
        }
        return false
    }
    
}
