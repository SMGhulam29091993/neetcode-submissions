class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        let res = 0
        for (let token of tokens){
            if (token === '+'){
                let a = Number(stack.pop())
                let b = Number(stack.pop())
                res = Number(a + b)
                stack.push(res)
            }else if (token === '-'){
                let a = Number(stack.pop())
                let b = Number(stack.pop())
                res = b - a
                stack.push(res)
            }else if (token === '*'){
                let a  = Number(stack.pop())
                let b = Number(stack.pop())
                res = b * a
                stack.push(res)
            }else if (token === '/'){
                let a = Number(stack.pop())
                let b = Number(stack.pop())
                res = Math.trunc(b/a)
                stack.push(res)
            }else{
                stack.push(Number(token))
            }
        }
        return stack[0]
    }
}
