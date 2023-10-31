const api = {
    key: 'fc5471f1aab552ccac56f42a07c723dc',
    base: 'https://api.openweathermap.org/data/2.5'
}

const searchBtn = document.querySelector(".search-button");
const inputField = document.querySelector("#input-field");
const weatherDiv = document.querySelector(".weatherInfo");
const image = document.querySelector(".image");
const degreesInfo = document.querySelector(".degrees");
const weatherInfo = document.querySelector(".weather");
const city = document.querySelector(".location");


searchBtn.addEventListener('click', setQuery)
function setQuery() {
    if (inputField.value !== '') {
        getResult(inputField.value);
    }
}

function getResult(cityName) {
    if (inputField.value !== "") {
        inputField.value = "";
        console.log(inputField.value);
    
        fetch(`${api.base}weather?q=${cityName}&units=metric&APPID=$${api.key}`)
        .then(weather => weather.json())
        .then(displayResults)
      }
}

function displayResults(weather) {
    console.log(weather);
}