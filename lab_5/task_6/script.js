const inputs = [...document.querySelectorAll('input')];
inputs.push(document.querySelector('textarea'))

inputs.forEach(input => {
    const parentElement = input.parentElement;

    input.addEventListener('focus', () => {
        parentElement.classList.toggle('focused_color');
    })

    input.addEventListener('blur', () => {
        parentElement.classList.toggle('focused_color');
    })
})