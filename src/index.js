module.exports = function solveSudoku(matrix) {
   if (solve(matrix)) {
      return matrix;
   }
};

function blank(matrix) {
   for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
         if (matrix[i][j] === 0) {
            return [i, j];
         }
      }
   }
   return [-1, -1];
}

function checkCol(matrix, col, number) {
   for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][col] == number) {
         return true;
      }
   }
   return false;
}

function checkRow(matrix, row, number) {
   for (let i = 0; i < matrix.length; i++) {
      if (matrix[row][i] == number) {
         return true;
      }
   }
   return false;
}

function checkBox(matrix, ropUpdate, colUpdate, number) {
   for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
         if (matrix[i + ropUpdate][j + colUpdate] == number) {
            return true;
         }
      }
   }
   return false;
}

function isSafe(matrix, row, col, number) {
   return (
      !checkRow(matrix, row, number) &&
      !checkCol(matrix, col, number) &&
      !checkBox(matrix, row - (row % 3), col - (col % 3), number) &&
      matrix[row][col] == 0
   );
}

function solve(matrix) {
   let cell = blank(matrix);
   if (cell[0] == '-1' || cell[1] == '-1') return true;
   for (let number = 0; number <= 9; number++) {
      if (isSafe(matrix, cell[0], cell[1], number)) {
         matrix[cell[0]][cell[1]] = number;
         if (solve(matrix)) {
            return true;
         } else {
            matrix[cell[0]][cell[1]] = 0;
         }
      }
   }
   return false;
}

function solveSudoku(matrix) {
   for (let i = 0; i < matrix.length; i++) {
      let space = '';
      for (let j = 0; j < matrix.length; j++) {
         space += matrix[i][j] + '';
      }
   }
}
