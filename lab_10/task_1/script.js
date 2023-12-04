const form = document.querySelector(".user-form");
const nameInput = document.getElementById("name");
const descTextarea = document.getElementById("desc");
const menCheckbox = document.getElementById("isMen");
const womenRadio = document.getElementById("isStudent");
const regionSelect = document.getElementById("region");
const submitbutton = document.getElementsByClassName("btn")

const SetData = () => {
  const userdata = JSON.parse(localStorage.getItem("userData"));
  const { name, description, isMen, isStudent, region } = userdata;
  nameInput.value = name;
  descTextarea.value = description;
  menCheckbox.checked = isMen;
  womenRadio.checked = isStudent;
  regionSelect.value = region;
  console.log(isMen);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userData = {
    name: nameInput.value,
    description: descTextarea.value,
    isMen: menCheckbox.checked,
    isStudent: womenRadio.checked,
    region: regionSelect.value,
  };

  localStorage.setItem("userData", JSON.stringify(userData));
});

window.addEventListener("load", SetData);
