class Solution:
    def isValid(self, s: str) -> bool:
        if not s:
            return False
        closeToOpen = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }

        stack = []
        for n in s:
            if n in closeToOpen:
                if stack and stack[-1] == closeToOpen[n]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(n)
        return len(stack) == 0
                
