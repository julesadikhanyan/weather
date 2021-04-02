async function setCurrentPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    await fetchWeatherByCoords(latitude, longitude);
}

async function setDefaultCity() {
    let id = 498817;
    await fetchWeatherByID(id);
}