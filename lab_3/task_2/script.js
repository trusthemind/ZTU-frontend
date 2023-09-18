const tables = document.querySelectorAll(".table")
console.log(tables);

tables.forEach(table => {
    let cells = table.querySelectorAll("td")
    for (let i = 0; i < cells.length; i++) {
        if (i % 2 === 1)
        cells[i].classList.add("selected")
    }
});