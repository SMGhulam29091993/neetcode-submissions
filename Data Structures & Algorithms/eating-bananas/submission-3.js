class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let s = 0
        let e = Math.max(...piles)
        let res = e

        while(s<=e){
            let m = Math.floor((s+e)/2)
            let hour = 0

            for(let pile of piles){
                hour += Math.ceil(pile/m)
            }
            if (hour <= h){
                res = m
                e = m - 1
            }else{
                s = m + 1
            }
        }
        return res
    }
}
