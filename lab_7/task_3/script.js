window.onload = () => {
  const container = document.querySelector(".container");
  container.style.border = "1px solid black";
  const button = document.querySelector(".runaway");

  const getRandomNumber = (num) => {
    return Math.floor(Math.random() * (num + 1));
  };

  button.addEventListener("mouseenter", (e) => {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const randX = getRandomNumber(containerWidth - button.offsetWidth);
    const randY = getRandomNumber(containerHeight - button.offsetHeight);

    button.style.left = `${randX}px`;
    button.style.top = `${randY}px`;
  });
};
