let key = 'a278fd3c83b4ffbf98780de2881d2e7d';
let url = `http://api.openweathermap.org/data/2.5/weather?units=metric&appid=${key}&`;

async function fetchWeatherByCoords(latitude, longitude) {
    try {
        let response = await fetch(`${url}lat=${latitude}&lon=${longitude}`);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

async function fetchWeatherByName(name) {
    try {
        let response = await fetch(`${url}q=${name}`);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}

async function fetchWeatherByID(id) {
    try {
        let response = await fetch(`${url}id=${id}`);
        return response.json();
    } catch (e) {
        console.log(e);
    }
}