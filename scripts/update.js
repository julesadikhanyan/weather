function updateGeolocation() {
    navigator.geolocation.getCurrentPosition(position => setCurrentPosition(position),
        positionError => setDefaultCity());

    document.querySelector('.current-city-main h2').innerHTML = 'Please, wait! Loading!';
    document.querySelector('.current-city-content img').src = 'img/update.svg';
    document.querySelector('.current-city-content p').innerHTML = "";

    document.querySelector(".current-city-list .feels-like").innerHTML = "";
    document.querySelector(".current-city-list .wind-speed").innerHTML = "";
    document.querySelector(".current-city-list .pressure").innerHTML = "";
    document.querySelector(".current-city-list .humidity").innerHTML = "";
    document.querySelector(".current-city-list .coords").innerHTML = "";
}