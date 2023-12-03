let slides = document.getElementsByClassName("slide");
let slideCount = slides.length;
let i = 0;

function moveLeft() {
  i++;
  if (i < slideCount) {
    slides[i].style.left = "0";
    slides[i - 1].style.left = "-100%";
  } else {
    i = 0;
    slides[i].style.left = "0";
    slides[slideCount - 1].style.left = "-100%";

    for (let x = 1; x < slideCount - 1; x++) {
      slides[x].style.left = "100%";
    }
  }
}
document.getElementById("next").onclick = moveLeft;

setInterval(moveLeft, 1600)