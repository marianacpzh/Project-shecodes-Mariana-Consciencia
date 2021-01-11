//Feature #1
let todaysDate = document.querySelector("#todaysDate");

let now = new Date();

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

todaysDate.innerHTML = ` ${day} ${hours}:${minutes}`;

//Feature #2

//function changeName(event) {
//event.preventDefault();
//let city = document.querySelector("#text-input");

//let changeCity = document.querySelector("#changeCity");
//changeCity.innerHTML = `${city.value}`;
//}

//let changeCity = document.querySelector("#searchCity");
//changeCity.addEventListener("submit", changeName);

//Bonus Feature

//function changeUnitCelsius(event) {
// event.preventDefault();

// let celsius = document.querySelector("h2");
// celsius.innerHTML = `13`;
//}

//function changeUnitFahrenheit(event) {
// event.preventDefault();
// let fahrenheit = document.querySelector("h2");

// let fahrenheitTemperature = Math.round((13 * 9) / 5 + 32);

// fahrenheit.innerHTML = `${fahrenheitTemperature}`;
//}

//let celsius = document.querySelector("#celsius");
//celsius.addEventListener("click", changeUnitCelsius);

//let fahrenheit = document.querySelector("#fahrenheit");
//fahrenheit.addEventListener("click", changeUnitFahrenheit);

//

function showTemperature(response) {
  let currentTemperature = Math.round(response.data.main.temp);

  let h2 = document.querySelector("h2");
  h2.innerHTML = currentTemperature;
}

function showCity(response) {
  let currentCity = response.data.name;
  let message = `${currentCity}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
}

function handlePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "f8b7ad76a785b871420ccfec88454d02";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
  axios.get(apiUrl).then(showCity);
}

navigator.geolocation.getCurrentPosition(handlePosition);

//

function changeShowTemperature(response) {
  let temperature = Math.round(response.data.main.temp);

  let h2 = document.querySelector("h2");
  h2.innerHTML = temperature;
}

function changeShowCity(response) {
  let newCity = response.data.name;
  let message = `${newCity}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
}

function changeName(event) {
  event.preventDefault();
  let apiKey = "f8b7ad76a785b871420ccfec88454d02";
  let units = "metric";
  let city = document.querySelector("#text-input");

  let changeApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=${units}`;

  axios.get(changeApiUrl).then(changeShowTemperature);
  axios.get(changeApiUrl).then(changeShowCity);
}

let changeCity = document.querySelector("#searchCity");
changeCity.addEventListener("submit", changeName);
