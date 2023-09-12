const body = document.querySelector("body")
const p = document.querySelectorAll("p")

body.style.fontFamily = "Arial, Helvetica, sans-serif";

p[0].style.color = "orange";
p[0].style.backgroundColor = "yellow";
p[0].style.fontSize = "16px";
p[0].style.padding = "5px";
p[0].style.textAlign = "center";

p[1].style.color = "blue";
p[1].style.backgroundColor = "lightblue";
p[1].style.fontSize = "14px";
p[1].style.padding = "5px";
p[1].style.textAlign = "end";

p[2].style.color = "red";
p[2].style.backgroundColor = "lightpink";
p[2].style.fontSize = "12px";
p[2].style.padding = "5px";
p[2].style.textAlign = "start";

const table = document.querySelector("table");
let cells = document.querySelectorAll("td");

for (let i = 0; i < cells.length; i++) {
    if (i % 2 === 0) {
        cells[i].classList.add("selected");
    }
}