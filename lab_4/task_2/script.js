let accordions = document.querySelectorAll(".accordion-item");

for (const accordion of accordions) {
    accordion.addEventListener("click", function () {
        this.classList.toggle("active");
        
        accordion.previousElementSibling ?
        accordion.previousElementSibling.classList.remove("active") : null;
        accordion.nextElementSibling ?
        accordion.nextElementSibling.classList.remove("active") : null;
    
    });
}