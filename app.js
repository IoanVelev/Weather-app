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
      .then((data) => displayResults(data))
      .catch((error) => {return city.textContent = `Invalid city name, please try again`});
    
  }
}

function displayResults(data) {
  const icon = data.weather[0].icon;
  if (icon === "01n") {
    image.src = "images/clearnight.png";
  } else if (icon === "01d") {
    image.src = "images/clear_day.png";
  } else if (icon === "02n") {
    image.src = "images/cloudy_night.png";
  } else if (icon === "02d") {
    image.src = "images/clody_day.png";
  } else if (icon === "03d" || icon === "03n") {
    image.src = "images/scattered_clouds.png";
  } else if (icon === "04d" || icon === "04n") {
    image.src = "images/broken_clouds.png";
  } else if (icon === "09d" || icon === "09n") {
    image.src = "images/shower_rain.png";
  } else if (icon === "10n") {
    image.src = "images/rain_night.png";
  } else if (icon === "10d") {
    image.src = "images/day_rain.png";
  } else if (icon === "11d" || icon === "11n") {
    image.src = "images/thunderstorm.png";
  } else if (icon === "13d" || icon === "13n") {
    image.src = "images/snow2.png";
  } else if (icon === "50d" || icon === "50n") {
    image.src = "images/mist.png";
  }

  city.textContent = `${data.name}, ${data.sys.country}`;
  degreesInfo.textContent = Math.round(data.main.temp) + "°C";
}
