const loadButton = document.querySelector("#load-btn");
const image = document.querySelector("#img");
const timer = document.querySelector("#timer");
const geo = document.querySelector("#geo");
const geolocation = navigator.geolocation;
const URL = "https://dog.ceo/api/breeds/image/random";

const loadPhoto = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const ModulePhoto = (item) => {
  document.body.style.background = "black";
  document.body.style.padding = "4rem";
  item.style.width = "100%";
  item.style.width = "100%";
  item.style.maxHeight = "800px";
  item.style.maxWidth = "800px";
};
const unModulePhoto = (item) => {
  document.body.style.background = "";
  item.style.width = "400px";
  item.style.height = "400px";
};

window.addEventListener("load", () => {
  const time = new Date();
  const message = localStorage.getItem("photo");
  const isHaveTime = Boolean(localStorage.getItem("time"));
  message && image.setAttribute("src", message);
  !isHaveTime && localStorage.setItem("time", time);
});

loadButton.addEventListener("click", async () => {
  const { message, status } = await loadPhoto();
  if (message && status === "success") {
    image.setAttribute("src", message);
    localStorage.setItem("photo", message);
  }
});

geo.addEventListener("click", () =>
  geolocation.getCurrentPosition((pos) => alert(Boolean(pos)))
);

const localTime = new Date(localStorage.getItem("time"));
timer.textContent = `${new Date(
  Math.floor(localTime - new Date() / 1000)
).getMinutes()}`;
image.addEventListener("click", () => ModulePhoto(image));
image.addEventListener("dblclick", () => unModulePhoto(image));
