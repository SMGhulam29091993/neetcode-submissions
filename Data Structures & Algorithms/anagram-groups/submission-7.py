class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashed = defaultdict(list)

        for word in strs:
            count = [0]*26

            for cha in word:
                count[ord(cha) - ord('a')] += 1

            hashed[tuple(count)].append(word)
        return list(hashed.values())
        
        # below is O(n * logn) time complexity because of sorting
        # hashed = {}
        # for cha in strs:
        #     hash_key = "".join(sorted(cha))
        #     if hash_key not in hashed: 
        #         hashed[hash_key] = []
        #     hashed[hash_key].append(cha)        
        # return list(hashed.values())
        
        
        