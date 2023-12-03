const table = document.querySelector("table");
const button = document.querySelector("button");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");

let tableArray = [];
let newItem = { name: "", surname: "" };

nameInput.addEventListener("change", (e) => {
    newItem.name = e.target.value;
})
surnameInput.addEventListener("change", (e) => {
    newItem.surname = e.target.value;
})
button.addEventListener("click", (e) => {
    e.preventDefault();
    postTableItem(tableArray, newItem)
});

const postTableItem = (array, item) => {
    if (array.length) {
    if (item?.name != "" && item?.surname != "") {
        array.push(item);
        const tableRow = document.createElement("tr");
        const idCell = document.createElement("td");
        const nameCell = document.createElement("td");
        const surnameCell = document.createElement("td");
        idCell.innerText = array.length;
        nameCell.innerText = item?.name;
        surnameCell.innerText = item?.surname;
        tableRow.appendChild(idCell);
        tableRow.appendChild(nameCell);
        tableRow.appendChild(surnameCell);
        table.appendChild(tableRow);
    }
}
}
postTableItem(tableArray);