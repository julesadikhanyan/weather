function updateLocalStorage() {
    let key = 'cities';
    let value = favorites.join();
    localStorage.setItem(key, value);
}

function loadLocalStorage() {
    if (localStorage.length !== 0) {
        favorites = localStorage.getItem('cities').split(',');
        Promise.all(favorites).then(favorites => favorites.forEach(function (value, index) {
            createFromTemplate(index);
        }));

        favorites.forEach(function (value, index) {
            fetchWeatherByID(value).then(data => printFavoriteCity(data, index));
        })
    }
}