const api = {
  key: "fc5471f1aab552ccac56f42a07c723dc",
  base: "https://api.openweathermap.org/data/2.5/",
};

const searchBtn = document.querySelector(".search-button");
const inputField = document.querySelector("#input-field");
const weatherDiv = document.querySelector(".weatherInfo");
const image = document.querySelector(".image");
const degreesInfo = document.querySelector(".degrees");
const weatherInfo = document.querySelector(".weather");
const city = document.querySelector(".location");

searchBtn.addEventListener("click", setQuery);
function setQuery() {
  if (inputField.value !== "") {
    getResult(inputField.value);
  }
}

function getResult(cityName) {
  if (inputField.value !== "") {
    inputField.value = "";
    fetch(`${api.base}weather?q=${cityName}&appid=${api.key}&units=metric`)
      .then((weather) => weather.json())
      .then((data) => displayResults(data));
  }
}

function displayResults(data) {
  console.log(data.weather);
  if (data.weather[0].main == "Clouds") {
    image.src = "images/clouds.png";
  } else if (data.weather[0].main  == "Rain") {
    image.src = "images/rain.png";
  } else if (data.weather[0].main == "Clear") {
    image.src = "images/clear.png";
  } else if (data.weather[0].main == "Wind") {
    image.src = "images/wind.png";
  } else if (data.weather[0].main == "Drizzle") {
    image.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Snow") {
    image.src = "images/snow.png";
  } else if (data.weather[0].main == "Mist") {
    image.src = "images/mist.png";
  }
  city.textContent = data.name;
  degreesInfo.textContent = Math.round(data.main.temp) + "°C";
}
