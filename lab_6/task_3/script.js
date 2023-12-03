const colorInput = document.querySelector("#head");
const container = document.querySelector("#blockContainer");
let tempColor = "";
let selectedBlock = null;
const colorArray = ["black", "red", "green", "yellow"];

function generateRandomColor() {
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    return colorArray[randomIndex];
}

window.addEventListener("load", () => {
    for (let i = 0; i < 9; i++) {
        let block = document.createElement("div");
        block.id = "" + i;
        block.style.width = "50px";
        block.style.height = "50px";
        block.style.border = "1px solid black";
        block.style.backgroundColor = generateRandomColor();
        container.appendChild(block);

        let previousColor = block.style.backgroundColor;
        let clicks = 0;

        block.addEventListener("click", () => {
            if (clicks < 2 && tempColor) {
                selectedBlock = block.id;
                block.style.backgroundColor = tempColor;
                clicks++;
            } else {
                block.style.backgroundColor = previousColor;
                clicks = 0;
            }
        });
    }
});

colorInput.addEventListener("input", (e) => {
    tempColor = e.target.value;
});
