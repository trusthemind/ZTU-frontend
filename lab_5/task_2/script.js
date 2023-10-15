const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const div = document.querySelector('div');

let emails = [];

checkboxes.forEach(item => {
    item.addEventListener('change', function () {
        if (this.checked)
            emails = [...emails, this.value];
        else {
            let index = emails.indexOf(this.value);
            if (index !== -1)
                emails.splice(index, 1);
        }
        div.innerHTML = emails.join('; ')
    })
})