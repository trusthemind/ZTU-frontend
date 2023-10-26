const img = document.querySelector('img');

img.addEventListener('click', (e) => {
    e.preventDefault();

    img.classList.toggle('full_width');
})