const time = document.querySelector(".time");

const f = () => {
  let now = new Date().toLocaleTimeString();
  time.textContent = `${now[1] != ":" ? now.slice[(0, 1)] : now[0]}${now.slice(
    1,
    4
  )}${now.slice(4, now.length - 3)}`;
};

f();

let timer = setInterval(f, 100);
