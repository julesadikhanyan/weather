async function addCity() {
    if (document.querySelector('.add-new-city').value !== "") {
        let name = document.querySelector('.add-new-city').value;
        let api = "http://api.openweathermap.org/data/2.5/weather?q=" + name +
            "&units=metric&appid=" + key;
        console.log(api);
        let data = await fetch(api);

        if (data.status === 200) {
            data = await data.json();
            console.log(window.localStorage.length);
            let continueOperation = true;
            for (let i = 0; i < window.localStorage.length; i++) {
                if (data.name === window.localStorage.getItem(i)) {
                    alert("the city already exists");
                    continueOperation = false;
                }
            }

            if (continueOperation) {
                loadingFavorites();
                let keys = Object.keys(window.localStorage);
                let id;
                if (window.localStorage.length === 0) {
                    id = 0;
                    window.localStorage.setItem(id, name);
                } else {
                    id = Math.max.apply(null, keys) + 1;
                    window.localStorage.setItem(id, name);
                }
                document.getElementById('fav-city').id = id;

                printFavoriteCity(data, id);
            }
        }
        document.querySelector('.add-new-city').value = "";
    }
}

function loadingFavorites() {

    let favorites = document.querySelector('.cities');
    let template = document.querySelector('.templateFavorites');
    template.content.querySelector('.city-from-favorites').setAttribute('id', 'fav-city')
    let clone = document.importNode(template.content, true);
    favorites.append(clone);
}