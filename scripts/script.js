window.onload = async function () {
    navigator.geolocation.getCurrentPosition(position => setCurrentPosition(position),
        positionError => setDefaultCity());

    let keys = Object.keys(window.localStorage);

    for (let key of keys) {
        let name = window.localStorage.getItem(key);
        console.log(name);
        loadingFavorites();


        document.getElementById('fav-city').id = key;

        await fetchWeatherByName(name, key);
    }
}













