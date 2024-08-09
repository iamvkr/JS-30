// Day 24: Project 1 - Weather App
// Tasks/Activities:
// Activity 1: Setting Up the Project

// Task 1: Initialize a new project directory and set up the basic HTML structure for the weather app.
// Task 2: Add a basic CSS file to style the weather app, including a container for displaying weather information.
/** DONE */

// Activity 2: Fetching Weather Data
// Task 3: Use the fetch API to get current weather data from a public weather API (e.g., OpenWeatherMap). Log the response data to the console.
const Apikey = `YOUR_API_KEY_OPEN_WEATHER_MAP`;

const fetchCurrentWeather = async (city) => {
    let data = null;
    if (sessionStorage.getItem(`currWeather-${city}`)) {
        data = JSON.parse(sessionStorage.getItem(`currWeather-${city}`));
        return data;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=metric`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.cod != "200") {
            return false;
        }
        sessionStorage.setItem(`currWeather-${city}`, JSON.stringify(data)) //caching the data
        return data;
    } catch (error) {
        console.log("Failed To Fetch", error.message);
        return false;
    }
}



// Task 4: Parse the weather data and display the current temperature, weather condition, and city name on the web page.
const populatedDataField = document.querySelector("#populatedData");
const tempIcon = document.querySelector("#tempIcon");

let city = "mumbai";

window.onload = async () => {
    const weatherData = await fetchCurrentWeather(city);
    const weatherForecastData = await fetchForecastWeather(city);
    updateWeatherData(weatherData)
    updateWeatherForecastData(weatherForecastData)
}

function updateWeatherData(weatherData) {
    if (!weatherData) {
        populatedDataField.innerHTML = `<tr><td class="border border-black w-28">Failed To Fetch Data</td></tr>`
        return false;
    }
    const weatherIcon = weatherData.weather[0].icon;
    tempIcon.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    populatedDataField.innerHTML = "";
    populatedDataField.innerHTML += populateCstmRows("City", weatherData.name) + 
        populateCstmRows("Temprature", weatherData.main.temp + "&deg;") +
        populateCstmRows("Feels Like", weatherData.main.feels_like + "&deg;") +
        populateCstmRows("Min Temp", weatherData.main.temp_min + "&deg;") +
        populateCstmRows("Max Temp", weatherData.main.temp_max + "&deg;") +
        populateCstmRows("Weather", weatherData.weather[0].main);
}

function populateRows(key, value) {
    return `<tr>
    <td class="border border-black w-28">${key}</td>
    <td class="border border-black w-28">${value}</td>
    </tr>`
}

// Activity 3: Adding Search Functionality

// Task 5: Add an input field and a search button to the HTML structure. Style the input and button using CSS.
/** DONE */

// Task 6: Write a function to fetch and display weather data for a city entered in the search input field. Log any errors to the console.
const SearchIcon = document.querySelector(".SearchIcon");
const SearchInput = document.querySelector(".SearchInput");
SearchIcon.addEventListener("click", () => {
    if (!(SearchInput.value.trim())) {
        alert("value cannot be empty");
        return false;
    }
    city = SearchInput.value;
    search();
})
async function search() {
    const weatherData = await fetchCurrentWeather(city);
    updateWeatherData(weatherData);
    const weatherForecastData = await fetchForecastWeather(city);
    updateWeatherForecastData(weatherForecastData)
}

// Activity 4: Displaying a 5-Day Forecast
// Task 7: Use the fetch API to get a 5-day weather forecast from the public weather API. Log the response data to the console.
const fetchForecastWeather = async (city) => {
    let data = null;
    if (sessionStorage.getItem(`currWeather-forecast-${city}`)) {
        data = JSON.parse(sessionStorage.getItem(`currWeather-forecast-${city}`));
        return data;
    }
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Apikey}&units=metric&cnt=5`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.cod != "200") {
            return false;
        }
        sessionStorage.setItem(`currWeather-forecast-${city}`, JSON.stringify(data)) //caching the data
        return data;
    } catch (error) {
        console.log("Failed To Fetch", error.message);
        return false;
    }
}
// Task 8: Parse the forecast data and display the temperature and weather condition for each day in the forecast on the web page.
const populatedWeekelyDataField = document.querySelector("#populatedWeekelyData");

function updateWeatherForecastData(weatherForecastData) {
    if (!weatherForecastData) {
        populatedWeekelyDataField.innerHTML = `<tr><td class="border border-black w-28">Failed To Fetch Data</td></tr>`;
        return false;
    }
    populatedWeekelyDataField.innerHTML = "";
    populatedWeekelyDataField.innerHTML += populateCstmRows("Date", "Temp","Feels Like","Min","Max","Weather");
    weatherForecastData.list.forEach((data, i, arr) => {
        const d = new Date(data.dt_txt);
        const hr = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
        const min = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
        const formattedDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${hr}:${min}`
        populatedWeekelyDataField.innerHTML += populateCstmRows(
            formattedDate, 
            data.main.temp+ "&deg;",
            data.main.feels_like+ "&deg;",
            data.main.temp_min+ "&deg;",
            data.main.temp_max+ "&deg;",
            data.weather[0].main
        );
    });
}
function populateCstmRows(...fields) {
    let s = "";
    fields.forEach(value => {
        s += `<td class="border border-black w-28">${value}</td>`
    });
    return `<tr>${s}</tr>`
}

// Activity 5: Enhancing the UI

// Task 9: Add icons or images to represent different weather conditions (e.g., sunny, rainy, cloudy) based on the weather data.
// Task 10: Add CSS animations or transitions to make the weather app more interactive and visually appealing.
/** DONE */


// OPTIONAL:
const selectCity = document.querySelector("#selectCity");

selectCity.addEventListener("change",async (e)=>{
    city = (e.target.value);
    const weatherData = await fetchCurrentWeather(city);
    updateWeatherData(weatherData);
    const weatherForecastData = await fetchForecastWeather(city);
    updateWeatherForecastData(weatherForecastData)
});

const Refresh = document.querySelector("#Refresh");
Refresh.addEventListener("click", ()=>{
    sessionStorage.clear();
    window.location.reload();
});