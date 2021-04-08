let key = 'a278fd3c83b4ffbf98780de2881d2e7d';
let url = `http://api.openweathermap.org/data/2.5/weather?units=metric&appid=${key}&`;

async function fetchWeatherByCoords(latitude, longitude) {
    return await fetch(`${url}lat=${latitude}&lon=${longitude}`).then(response => response.json()).catch(e => console.log(e));
}

async function fetchWeatherByName(name) {
    return await fetch(`${url}q=${name}`).then(response => response.json()).catch(e => console.log(e));
}

async function fetchWeatherByID(id) {
    return await fetch(`${url}id=${id}`).then(response => response.json()).catch(e => console.log(e));
}