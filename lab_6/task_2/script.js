// Створюємо контейнер для квадратиків
const container = document.querySelector(".container");
const input = document.querySelector("#textarea-input");

let inputValue = "";
console.log(inputValue);
input.addEventListener("change", (e) => {
    container.innerHTML = "";
    inputValue = e.target.value;
    inputValue = inputValue.trim();

    for (let i = 0; i < inputValue.length; i++) {
        const color = inputValue[i] === "0" ? "black" : "white";
        const square = document.createElement("div");
        square.style.backgroundColor = color;
        square.style.width = "20px";
        square.style.height = "20px";
        square.style.border = "1px solid black";

        container.appendChild(square);
    }

})
document.body.appendChild(container);
