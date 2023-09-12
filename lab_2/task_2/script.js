
let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum,
            eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;

// 1
let newTxt = text[12] + text[6] + text[18] + text[25];
//2
console.log(newTxt.toLowerCase());
//3
let positions = [];
for (let i = 0; i < text.length; i++) {
    if (text.substring(i, i + 2) === "in") {
        positions.push(i);
    }
}
console.log(positions); // [17, 31, 52]
//4
const array = text.split("");
console.log(array)
//5
let invertText = "";
for (let i = text.length - 1; i >= 0; i--) {
    invertText += text[i];
}
console.log(invertText);
//6
function ucFirst(txt) {
    let newTxt = txt[0].toUpperCase() + txt.slice(1);
    return newTxt;
}

console.log(ucFirst('some text'));