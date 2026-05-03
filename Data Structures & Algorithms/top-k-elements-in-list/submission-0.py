class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hashed = {}

        for n in nums:
            if n in hashed:
                hashed[n] += 1
            else: 
                hashed[n] = 1
        
        bucket = [[]for _ in range(len(nums)+1)]
        for num, i in hashed.items():
            bucket[i].append(num)

        res = []
        for i in range(len(bucket)-1,0,-1):
            for num in bucket[i]:
                res.append(num)
                if len(res) == k:
                    return res