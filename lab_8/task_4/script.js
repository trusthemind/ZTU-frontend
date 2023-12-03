let c = document.querySelector("canvas");
let ctx = c.getContext("2d");

function getRandomColor() {
  let letters = "0123456789ABCDEF".split("");
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let x = [
  Math.random() * 300 + 1,
  Math.random() * 300 + 1,
  Math.random() * 300 + 1,
  Math.random() * 300 + 1,
];
let y = [
  Math.random() * 400 + 1,
  Math.random() * 400 + 1,
  Math.random() * 400 + 1,
  Math.random() * 400 + 1,
];
let vx = [
  Math.random() * 10 + 1,
  Math.random() * 5 + 1,
  Math.random() * 8 + 1,
  Math.random() * 8 + 1,
];
let vy = [
  Math.random() * 12 + 1,
  Math.random() * 15 + 1,
  Math.random() * 12 + 1,
  Math.random() * 12 + 1,
];
let fric = 0.999;
let bgX = 1400;
let bgY = 700;

let Color = [
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
  getRandomColor(),
];
for (i = 0; i < 100; i++) {
  x.push(Math.random() * 300 + 1);
  y.push(Math.random() * 400 + 1);
  vx.push(Math.random() * 11 + 1);
  vy.push(Math.random() * 12 + 1);
  Color.push(getRandomColor());
}

function draw() {
  ctx.fillStyle = "#777";
  ctx.fillRect(0, 0, bgX, bgY);

  for (i = 0; i < x.length; i++) {
    ctx.fillStyle = Color[i];
    ctx.fillRect(x[i], y[i], 10, 10);

    if (Math.abs(vx[i]) < 1 && Math.abs(vy[i]) < 1) {
      vx[i] = (Math.random() - 0.5) * 10 + 1;
      vy[i] = (Math.random() - 0.5) * 12 + 1;
      x[i] = Math.random() * 200 + 1;
      y[i] = Math.random() * 300 + 1;
    }

    //wall logic
    if (x[i] >= bgX - 10 || x[i] <= 0) vx[i] = -vx[i];
    if (y[i] >= bgY - 10 || y[i] <= 0) vy[i] = -vy[i];
    vx[i] *= fric;
    vy[i] *= fric;
    x[i] += vx[i];
    y[i] += vy[i];
  }

  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
