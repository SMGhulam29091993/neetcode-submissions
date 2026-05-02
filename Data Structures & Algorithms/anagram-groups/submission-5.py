class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashed = defaultdict(list)

        for cha in strs:
            count = [0] * 26

            for words in cha:
                count[ord(words) - ord('a')] += 1
            
            hashed[tuple(count)].append(cha)
        return list(hashed.values())

        # below is O(n * logn) time complexity because of sorting
        # hashed = {}
        # for cha in strs:
        #     hash_key = "".join(sorted(cha))
        #     if hash_key not in hashed: 
        #         hashed[hash_key] = []
        #     hashed[hash_key].append(cha)        
        # return list(hashed.values())