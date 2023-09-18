let matrix = [];

let n = 4;
let m = 4;

let pos = 0;
let notzeroRows = 0;
columswithZero = 0;

for (let i = 0; i < n; ++i) {
    matrix[i] = [];
    for (let j = 0; j < m; ++j) {
        matrix[i][j] = Math.floor((Math.random() * 10) - 5);
        if (matrix[i][j] > 0)
            pos++
    }
    // find a rows without zeros
    // find a colums with less one zeros
    if (!matrix[i].includes(0))
        notzeroRows++;
    else
        columswithZero++;
}


let rowIndexWithStreak = null;
for (let i = 0; i < matrix.length; i++) {
    let currentNumber = matrix[i][0];
    let currentStreakLength = 1;
    for (let j = 1; j < matrix[i].length; j++) {
        if (matrix[i][j] === currentNumber) {
            currentStreakLength++;
        } else {
            if (currentStreakLength > 1) {
                rowIndexWithStreak = i;
                break;
            }
            currentNumber = matrix[i][j];
            currentStreakLength = 1;
        }
    }
    if (currentStreakLength > 1) {
        rowIndexWithStreak = i;
        break;
    }
}


let rowsNoNegativeSum = null;

// for (let i = 0; i < matrix.length; i++) {
//     if (!matrix.some(v => v < 0))
//         rowsNoNegativeSum+
// }


console.log(matrix);
console.log("pos", pos);
console.log("rows without zeros", notzeroRows);
console.log("colums with zeros", columswithZero);
console.log("row index with number streak", rowIndexWithStreak);
console.log("rows summ without negative", rowsNoNegativeSum);