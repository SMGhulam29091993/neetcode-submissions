class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frequency = {}
        for (let num of nums){
            if (num in frequency){
                frequency[num] += 1
            }else{
                frequency[num] = 1
            }
        }

        // Create buckets
        const bucket = Array.from(
            { length: nums.length + 1 },
            () => []
        )

        // Fill buckets
        for (const [num, freq] of Object.entries(frequency)) {
            bucket[freq].push(Number(num))
        }

        // Collect top k
        const res = []

        for (let i = bucket.length - 1; i >= 0; i--) {

            for (const num of bucket[i]) {

                res.push(num)

                if (res.length === k) {
                    return res
                }
            }
        }

        return res
    }
}
