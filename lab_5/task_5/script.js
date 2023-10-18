const gallery = document.querySelector(".gallery");
const images = gallery.querySelectorAll("img");

for (const image of images) {
  image.classList.add("inactive");
}

for (const image of images) {
  image.addEventListener("click", () => {
    image.classList.toggle("inactive");

    if (image.classList.contains("inactive")) {
      image.style.filter = "grayscale(100%)";
      image.style.opacity = 0.5;
    } else {
      image.style.filter = "grayscale(0%)";
      image.style.opacity = 1;
    }
  });
}