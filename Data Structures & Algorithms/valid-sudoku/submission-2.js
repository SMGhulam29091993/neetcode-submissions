class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = new Set()
        let cols = new Set()
        let box = new Set()

        for(let r = 0; r < 9; r++){
            for (let c = 0; c < 9; c++){
                let val = board[r][c]

                if(val === "."){
                    continue
                }
                let boxKey = Math.floor(r/3) + "-" + Math.floor(c/3)
                let rowKey = r + "-" + val
                let colKey = c + "-" + val
                let boxValKey = boxKey + "-" + val

                if(rows.has(rowKey) || cols.has(colKey) || box.has(boxValKey)){
                    return false
                }
                
                rows.add(rowKey)
                cols.add(colKey)
                box.add(boxValKey)
            }
        }
        return true
    }
}
