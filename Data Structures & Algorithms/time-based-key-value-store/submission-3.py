class TimeMap:

    def __init__(self):
        self.store = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key not in self.store:
            self.store[key] = []
        self.store[key].append([timestamp, value])

    def get(self, key: str, timestamp: int) -> str:
        if key not in self.store:
            return ""
        
        values = self.store[key]

        s,e = 0, len(values)-1
        res = ""

        while s <= e:
            m = (s+e)//2

            if values[m][0] <= timestamp:
                res = values[m][1]
                s = m + 1
            else:
                e = m - 1
        return res
