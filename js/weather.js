const API_KEY = "29dc572599385cb745ba89b51182b9c5";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather");
      weather.innerHTML = `${data.weather[0].main}, ${Math.round(data.main.temp)}°C`;
    });
}

function onGeoError() {
  console.log("Can't find you. No weather for you.");
}

if (localStorage.getItem(USERNAME_KEY) !== null) {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}
