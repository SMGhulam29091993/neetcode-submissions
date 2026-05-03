import heapq

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hashed = {}

        for n in nums:
            if n in hashed:
                hashed[n] += 1
            else: 
                hashed[n] = 1
        heap = []
        for num, i in hashed.items():
            heapq.heappush(heap, (i,num))
            if len(heap) > k:
                heapq.heappop(heap)
        return [num for freq,num in heap]
        # below is the bucket sort solution with T->O(n) and S->O(n)
        # bucket = [[]for _ in range(len(nums)+1)]
        # for num, i in hashed.items():
        #     bucket[i].append(num)

        # res = []
        # for i in range(len(bucket)-1,0,-1):
        #     for num in bucket[i]:
        #         res.append(num)
        #         if len(res) == k:
        #             return res