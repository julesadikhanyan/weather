if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition);
}

function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    weather.fetchWeather(latitude, longitude);
}

const weather = {
    "key": "a278fd3c83b4ffbf98780de2881d2e7d",
    fetchWeather: function (latitude, longitude) {
        let api = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude +
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
        document.querySelector(".my-city img").src = "https://openweathermap.org/img/wn/" + icon + "@4x.png";
        document.querySelector(".my-city p").innerText = Math.round(temp) + "°C";
        document.querySelector(".my-city-list .wind").innerText = speed + " m/s";
        document.querySelector(".my-city-list .pressure").innerText = pressure + " hpa";
        document.querySelector(".my-city-list .humidity").innerHTML = humidity + " %";
        document.querySelector(".my-city-list .feels_like").innerHTML = Math.round(feels_like) + "°C";
        document.querySelector(".my-city-list .coords").innerHTML = "[" + lon.toFixed(2) + ", " + lat.toFixed(2) + "]";
    },

    /*search: function () {
        this.fetchWeather(document.querySelector(".search").value);
    }*/
};

/*document.querySelector(".new-city button").addEventListener("click", function () {
    weather.search();
});*/





