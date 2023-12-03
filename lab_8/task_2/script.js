let timers = [
  { time: 60, default: 60, interval: null },
  { time: 180, default: 180, interval: null },
  { time: 3600, default: 3600, interval: null },
];

function startTimer(id) {
  if (timers[id - 1].interval === null) {
    timers[id - 1].interval = setInterval(() => {
      let time = timers[id - 1].time;
      const timerElement = document.getElementById(`timer${id}`);
      timerElement.textContent = secoundsToHours(time);

      if (time <= 0) {
        clearInterval(timers[id - 1].interval);
        timers[id - 1].interval = null;
      } else {
        timers[id - 1].time--;
      }
    }, 1000);
  }
}

function stopTimer(timerId) {
  if (timers[timerId - 1].interval !== null) {
    clearInterval(timers[timerId - 1].interval);
    timers[timerId - 1].interval = null;
  }
}

function resetTimer(timerId) {
  clearInterval(timers[timerId - 1].interval);
  timers[timerId - 1].time = timers[timerId - 1].default;
  timers[timerId - 1].interval = null;

  document.getElementById(`timer${timerId}`).textContent = secoundsToHours(
    timers[timerId - 1].time
  );
}

function secoundsToHours(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let sec = seconds % 60;

  return `${hours ? hours + ":" : ""}${minutes}:${sec}`;
}
