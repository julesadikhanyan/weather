window.onload = async function () {
    navigator.geolocation.getCurrentPosition(position => setCurrentPosition(position),
        positionError => setDefaultCity());

    for (let i=0; i<localStorage.length; i++) {
        let key = window.localStorage.key(i);
        let name = window.localStorage.getItem(key)
        console.log(name);
        loadingFavorites();


        document.getElementById('fav-city').id = key;

        await fetchWeatherByName(name, key);
    }
}













