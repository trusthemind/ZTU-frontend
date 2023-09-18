let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];

//min max
let min = arr[0]
let max = arr[arr.length - 1]

arr.forEach((item) => {
    if (item < min)
        min = item;
    if (item > max)
        max = item;
})
console.log("max", max);
console.log("min", min);

//even odd
let even = 0;
let odd = 0;

arr.forEach((item) => {
    if (item % 2 === 0)
        even++;
    else
        odd++;
})

console.log("even", even);
console.log("odd", odd);

//item has two numbers 
let twoNumbersItemsCount = 0;

arr.forEach((item) => {
    let temp = item.toString();
    if (temp.length === 2)
        if (!temp.includes("-"))
            twoNumbersItemsCount++;
})
console.log("Items what has two letters", twoNumbersItemsCount);


let positiveCount = 0;
let negativeCount = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        positiveCount++;
    } else {
        negativeCount++;
    }
}
console.log("pos", positiveCount);
console.log("neg", negativeCount);
//sort 
arr.sort()
console.log(arr);
// reverse sort
arr.reverse()
console.log(arr);