class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const openToClose = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }

        let stack = []

        for(let i of s){
            if(i in openToClose){
                if (stack.length && stack[stack.length-1] == openToClose[i]){
                    stack.pop()
                }else{
                    return false
                }
            }else{
                stack.push(i)
            }
        }
        return stack.length === 0
    }
}
