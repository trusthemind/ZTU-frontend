let matrix = [];

let row = 4;
let col = 3;

let pos = 0;
let notzeroRows = 0;
columswithZero = 0;

for (let i = 0; i < row; ++i) {
    matrix[i] = [];
    for (let j = 0; j < col; ++j) {
        matrix[i][j] = Math.floor((Math.random() * 25) - 5);
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

const positiveRows = [];
let multiplyPos = 1;
for (let i = 0; i < matrix.length; i++) {
    if (!matrix[i].some(element => element <= 0)) {
        positiveRows.push(matrix[i])
    }
}
for (const row of positiveRows) {
    for (const cell of row) {
        multiplyPos *= cell;
    }
}

const transposeMatrix = (matrix) => {
    const transpose = [];
    for (let i = 0; i < matrix[0].length; i++) {
        transpose[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            transpose[i][j] = matrix[j][i];
        }
    }
    return transpose;
}

positiveCols = [];
let PositiveColumsSum = 0;
let tempPositive = transposeMatrix(matrix)
for (let i = 0; i < tempPositive.length; i++) {
    if (tempPositive[i].every(element => element > 0)) {
        positiveCols.push(tempPositive[i])
    }
}
for (const coll of positiveCols) {
    for (const cell of coll) {
        PositiveColumsSum += cell;
    }
}

negativeCols = [];
let NegativeColumsSum = 0;
let tempNegative = transposeMatrix(matrix)
for (let i = 0; i < tempPositive.length; i++) {
    if (tempPositive[i].some(element => element < 0)) {
        negativeCols.push(tempPositive[i])
    }
}
for (const coll of negativeCols) {
    for (const cell of coll) {
        NegativeColumsSum += cell;
    }
}

console.log(matrix);
console.log("pos", pos);
console.log("rows without zeros", notzeroRows);
console.log("colums with zeros", columswithZero);
console.log("row index with number streak", rowIndexWithStreak);
console.log("pos multiply", positiveRows, multiplyPos);
console.log('pos :', PositiveColumsSum)
console.log('neg :', NegativeColumsSum)
console.log('transpose matrix:', transposeMatrix(matrix))