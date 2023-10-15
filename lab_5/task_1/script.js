const btn = document.querySelector("button");
let checkboxes = document.querySelectorAll("input[type=checkbox]");
let container = document.querySelector(".result-container");
let checkList = [];

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", (e) => {
        if (checkbox.checked)
            checkList = [...checkList, e.target.value];
        else {
            const index = checkList.findIndex(item => item === e.target.value);
            if (index !== -1)
                checkList.splice(index, 1);
        }
    });
});

btn.addEventListener("click", (e) => {
    e.preventDefault();
    container.innerHTML = "";
    checkList.forEach(item => {
        console.log(item);
        let itemContainer = document.createElement("span")
        itemContainer.style.margin = "2.5px";
        itemContainer.innerText = item;
        container.appendChild(itemContainer);
    })

});