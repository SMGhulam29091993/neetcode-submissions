class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        row = 0
        while row < len(matrix):
            s  = 0
            e = len(matrix[row])-1

            if matrix[row][0] <= target <= matrix[row][-1]:
                while s <= e:
                    m = (s + e)//2 
                    if target < matrix[row][m]:
                        e = m - 1
                    elif target > matrix[row][m]:
                        s = m + 1
                    else:
                        return True
            row += 1
        return False
        