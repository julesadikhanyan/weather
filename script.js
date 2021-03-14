function getPosition() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(setPosition);
    }
}

function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    weather.fetchWeatherByCoords(latitude, longitude);
}

const weather = {
    "key": "a278fd3c83b4ffbf98780de2881d2e7d",

    fetchWeatherByCoords: function (latitude, longitude) {
        let api = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude +
            "&units=metric&appid=" + this.key;
        fetch(api).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    fetchWeatherByName: function (city) {
        let api = "http://api.openweathermap.org/data/2.5/weather?q=" + city +
            "&units=metric&appid=" + this.key;
        fetch(api).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon } = data.weather[0];
        const { temp, feels_like, pressure, humidity } = data.main;
        const { speed } = data.wind;
        const { lon, lat } = data.coord;
        document.querySelector(".my-city h2").innerHTML = name;
        document.querySelector(".my-city img").src = "http://openweathermap.org/img/wn/" + icon + "@4x.png";
        document.querySelector(".my-city p").innerText = Math.round(temp) + "°C";
        document.querySelector(".my-city-list .wind").innerText = Math.round(speed) + " m/s";
        document.querySelector(".my-city-list .pressure").innerText = pressure + " hpa";
        document.querySelector(".my-city-list .humidity").innerHTML = humidity + " %";
        document.querySelector(".my-city-list .feels_like").innerHTML = Math.round(feels_like) + "°C";
        document.querySelector(".my-city-list .coords").innerHTML = "[" + lon.toFixed(2) + ", " + lat.toFixed(2) + "]";

        document.getElementById("wait").style.display = "none";
        document.getElementById("current-city").style.display = "grid";
        document.getElementById("favorites").style.display = "grid";
    },
};

function reloadGeo() {
    getPosition();
    document.getElementById("wait").style.display = "flex";
    document.getElementById("current-city").style.display = "none";
}







