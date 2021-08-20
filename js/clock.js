const clock = document.querySelector("#clock");

function padZero(num) {
  return num.toString().padStart(2, "0");
}

function getClock() {
  const date = new Date();
  const hour = padZero(date.getHours());
  const minute = padZero(date.getMinutes());
  const second = padZero(date.getSeconds());
  clock.innerText = `${hour}:${minute}:${second}`;
}

getClock();
setInterval(getClock, 500);
