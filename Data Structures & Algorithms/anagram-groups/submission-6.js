class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {}

        for(let word of strs){
            let count = Array(26).fill(0)

            for(let letters of word){
                let idx = letters.charCodeAt() - "a".charCodeAt()
                count[idx] += 1
            }
            let key = count.join("-")
            if (key in res){
                res[key].push(word)
            }else{
                res[key] = [word]
            }

        }
        return Object.values(res)
    }
}
