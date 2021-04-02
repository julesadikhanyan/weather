function printCurrentCity(data) {
    document.querySelector('.current-city-main h2').innerHTML = data.name;
    document.querySelector('.current-city-content img').src = "http://openweathermap.org/img/wn/"
        + data.weather[0].icon + "@4x.png";
    document.querySelector('.current-city-content p').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".current-city-list .feels-like").innerHTML = Math.round(data.main.feels_like) + "°C";
    document.querySelector(".current-city-list .wind-speed").innerHTML = Math.round(data.wind.speed) + " m/s";
    document.querySelector(".current-city-list .pressure").innerHTML = data.main.pressure + " hPa";
    document.querySelector(".current-city-list .humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".current-city-list .coords").innerHTML = "[" + data.coord.lon.toFixed(2)
        + ", " + data.coord.lat.toFixed(2) + "]";
}

function printFavoriteCity(data, id) {
    let city = document.getElementById(id);

    city.querySelector('.city-header h3').innerHTML = data.name;
    city.querySelector('.city-header img').src = "http://openweathermap.org/img/wn/"
        + data.weather[0].icon + "@4x.png";
    city.querySelector('.city-header p').innerHTML = Math.round(data.main.temp) + "°C";
    city.querySelector(".city-list .feels-like").innerHTML = Math.round(data.main.feels_like) + "°C";
    city.querySelector(".city-list .wind-speed").innerHTML = Math.round(data.wind.speed) + " m/s";
    city.querySelector(".city-list .pressure").innerHTML = data.main.pressure + " hPa";
    city.querySelector(".city-list .humidity").innerHTML = data.main.humidity + " %";
    city.querySelector(".city-list .coords").innerHTML = "[" + data.coord.lon.toFixed(2)
        + ", " + data.coord.lat.toFixed(2) + "]";
}