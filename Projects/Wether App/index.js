const userTab = document.querySelector("[data-yourWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-cont");

const grantAccessContainer = document.querySelector(".grant-location-access-cont");
const searchForm = document.querySelector("[data-searchForm]");

const loadingScreen = document.querySelector(".loading-cont");
const userInfoContainer = document.querySelector(".user-weather-info-cont");

const locationError = document.querySelector(".discrip");

const grantAccessBtn = document.querySelector("[data-grantAcess]");
let searchCityInput = document.querySelector("[data-searchInput]")
const searchBtn = document.querySelector("[search-btn]");



const Api_Key = "1d7b57eae50bbd5ff89b8b3aab104273";
let currentTab = userTab;
currentTab.classList.add("current-tab");
getCoordinatesFromSessionStorage();



function switchTab(clickedTab) {
    if (clickedTab != currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab")


        if (!searchForm.classList.contains("active")) {
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");

        }
        else {
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");

            getCoordinatesFromSessionStorage();
        }
    }
}

userTab.addEventListener('click', () => {
    switchTab(userTab);
})

searchTab.addEventListener('click', () => {
    switchTab(searchTab);
})


function getCoordinatesFromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if (!localCoordinates) {
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchWeatherInfo(coordinates);
    }
}

async function fetchWeatherInfo(coordinates) {
    const { lat, lon } = coordinates;
    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");


    try {
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Api_Key}`);
        let data = await responce.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderData(data);

    }
    catch (e) {
        loadingScreen.classList.remove("active");
        cityName.textContent = "City Not Found"

        console.log("error")
    }

}

function renderData(data) {

    const cityName = document.querySelector("[data-cityName]");
    const countryImg = document.querySelector("[data-contryIcon]");
    const weatherDesc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temprature = document.querySelector("[data-temp]");
    const windSpeed = document.querySelector("[data-windSpeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    cityName.innerText = data?.name;
    countryImg.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`
    weatherDesc.innerText = data?.weather?.[0]?.description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`;
    temprature.innerText = data?.main?.temp;
    windSpeed.textContent = data?.wind?.speed;
    humidity.textContent = data?.main?.humidity;
    cloudiness.textContent = data?.clouds?.all;

}

function showPosition(position) {
    const userCooedinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCooedinates));
    fetchWeatherInfo(userCooedinates);

}

grantAccessBtn.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    }
    else {
        locationError.textContent = "Geolocation is not supported by this browser."
    }
});
let errorCity = document.querySelector("error-city")
async function fetchSearchedWeatherInfo(city) {
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");

    try {
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`);
        let data = await responce.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderData(data);
    }
    catch (e) {
        console.log(e)
        errorCity.textContent = "City Not Found";
    }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let searchCity = searchCityInput.value
    if (searchCity === "") {
        return;
    } else {

        fetchSearchedWeatherInfo(searchCity);
    }
});