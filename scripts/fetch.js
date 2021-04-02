const key = "a278fd3c83b4ffbf98780de2881d2e7d";

async function fetchWeatherByCoords(latitude, longitude) {
    let api = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude +
        "&units=metric&appid=" + key;
    let data;
    try {
        data = await fetch(api);
        data = await data.json();
        printCurrentCity(data);
    } catch (e) {
        console.log(e);
    }
}

async function fetchWeatherByName(name, id) {
    let api = "http://api.openweathermap.org/data/2.5/weather?q=" + name +
        "&units=metric&appid=" + key;
    let data;
    try {
        data = await fetch(api);
        data = await data.json();
        printFavoriteCity(data, id);
    } catch (e) {
        console.log(e);
    }
}

async function fetchWeatherByID(id) {
    let api = "http://api.openweathermap.org/data/2.5/weather?id=" + id +
        "&units=metric&appid=" + key;
    let data;

    try {
        data = await fetch(api);
        data = await data.json();
        printCurrentCity(data, id);
    } catch (e) {
        console.log(e)
    }
}