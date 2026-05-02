class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashed = {}
        res = []
        for cha in strs:
            hash_key = "".join(sorted(cha))
            if hash_key not in hashed: 
                hashed[hash_key] = []
            hashed[hash_key].append(cha)        
        return list(hashed.values())