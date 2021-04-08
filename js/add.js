async function addCity() {
    let input = document.querySelector('input').value;
    if (input !== '') {
        let data = await fetchWeatherByName(input);
        if (data.cod === '404') {
            alert(data.message);
        } else {
            let id = data.id.toString();
            if (favorites.indexOf(id) === -1) {
                let sectionID = favorites.length.toString();
                createFromTemplate(sectionID);
                favorites.push(id);
                printFavoriteCity(data, sectionID);
                updateLocalStorage();
            } else {
                alert('this city already exists!');
            }
        }
        document.querySelector('input').value = '';
    }
}

function pressEnter() {
    document.querySelector('input').addEventListener('keypress',
        function (e) {
            if (e.key === 'Enter') {
                addCity();
            }
        });
}