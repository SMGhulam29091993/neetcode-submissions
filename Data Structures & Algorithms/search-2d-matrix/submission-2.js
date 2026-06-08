class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let row = 0
        while(row < matrix.length){
            let s = 0
            let end = matrix[row].length - 1
           
            if (matrix[row][0] <= target <= matrix[row][end]){
                 while(s <= end){
                    let m = Math.trunc((s+end)/2)
                    if (target < matrix[row][m]){
                        end = m - 1
                    }else if(target > matrix[row][m]){
                        s = m + 1
                    }else{
                        return true
                    }
                }
                
            }
            row++
        }
        return false
    }
}
