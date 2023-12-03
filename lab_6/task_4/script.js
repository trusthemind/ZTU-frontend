const blocks = document.querySelectorAll(".block");

for (let block of blocks) {
    const deleteButton = block.querySelector(".delete");
    const editButton = block.querySelector(".edit");

    deleteButton.addEventListener("click", () => {
        block.remove();
    });

    editButton.addEventListener("click", () => {
        const textarea = document.createElement("textarea");
        const blockText = block.querySelector("p");
        textarea.value = blockText.innerText;
        textarea.focus();
        
        block.innerHTML = "";
        block.appendChild(textarea);
        
        textarea.addEventListener("blur", () => {
            block.textContent = textarea.value + "*edited";
            textarea.remove();
        });
    });
}
